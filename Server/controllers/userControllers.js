const UserModel = require("../model/User.js");
const TokenBlacklist = require('../model/TokenBlacklist.modal.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../config/emailConfig.js");


class UserControllers {
  static userRegistration = async (req, res) => {
    const { name, email, password, password_confirmation, tc } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.send({ status: "failed", msg: "Email already exists" });
    } else {
      if (name && email && password && password_confirmation && tc) {
        if (password === password_confirmation) {
          try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const doc = new UserModel({
              name: name,
              email: email,
              password: hashPassword,
              tc: tc,
              provider: "JWT",

            });
            await doc.save();
            const saved_user = await UserModel.findOne({ email: email });
            const token = jwt.sign(
              { userID: saved_user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "1d" }
            );
            res
              .status(201)
              .send({
                status: "success",
                msg: "registeration successfull",
                token : token
              });
          } catch (error) {
            res.send({ status: "failed", msg: "Unable to register user" });
          }
        } else {
          res.send({
            status: "failed",
            msg: "Password and Confirm Password does not match",
          });
        }
      } else {
        res.send({ status: "failed", msg: "All fields are required" });
      }
    }
  };

  static userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await UserModel.findOne({ email: email });
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (user.email === email && isMatch) {
            //Generate jwt token
            const token = jwt.sign(
              { userID: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );
            res.send({
              status: "success",
              msg: "login successfull",
              token: token, 
            });
          } else {
            res.send({
              status: "failed",
              msg: "Email or Password is incorrect",
            });
          }
        } else {  
          res.send({ status: "failed", msg: "Email does not exist" });
        }
      } else {
        res.send({ status: "failed", msg: "All fields are required" });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", msg: "Unable to login" });
    }
  };

  static changeUserPassword = async (req, res) => {
    const { old_password, new_password, confirmation_new_password } = req.body;
  
    if (!old_password || !new_password || !confirmation_new_password) {
      return res.send({ status: "failed", msg: "All fields are required" });
    }
  
    try {
      // Verify old password
      const user = await UserModel.findById(req.user._id);
      const isMatch = await bcrypt.compare(old_password, user.password);
      if (!isMatch) {
        return res.send({ status: "failed", msg: "Old password is incorrect" });
      }
  
      // Check if new password is the same as the old password
      const isSameAsOld = await bcrypt.compare(new_password, user.password);
      if (isSameAsOld) {
        return res.send({ status: "failed", msg: "New password must be different from the old password" });
      }
  
      // Check if new password and confirmation match
      if (new_password !== confirmation_new_password) {
        return res.send({ status: "failed", msg: "New Password and Confirm New Password do not match" });
      }
  
      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const newHashPassword = await bcrypt.hash(new_password, salt);
  
      // Update the password in the database
      await UserModel.findByIdAndUpdate(req.user._id, {
        $set: { password: newHashPassword }
      });
  
      res.send({ status: "success", msg: "Password changed successfully" });
      console.log("New password is:", newHashPassword);
      console.log("User ID:", req.user._id);
    } catch (error) {
      console.error(error);
      res.send({ status: "failed", msg: "An error occurred while changing the password" });
    }
  };


  static sendUserPasswordResetEmail = async (req,res) => {
    const {email} = req.body
    if(email) {
      const user = await UserModel.findOne({email: email})
      if(user){
        const secret = user._id + process.env.JWT_SECRET_KEY 
        const token = jwt.sign({userID:user._id}, secret  ,{ expiresIn: '15m'})
        const link = `http://localhost:3000/reset/${user._id}/${token}`
        console.log(link)

        //send email
        let info = await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: user.email,
          subject: "LegoUI - Reset your account password ",
          html: `Click here to <a href=${link}>Reset your password</a>`,
        })

        res.send({status: "success", msg: "Password reset link sent to your email","info" : info})
      }else{
        res.send({status: "failed", msg: "Email does not exist"})
      }
    }else{
      res.send({status: "failed", msg: "Email field is required"})
    }
  }

  static sendUserPasswordReset = async (req, res) => {
    const {password, password_confirmation} = req.body
    const {id, token} = req.params   
    const user = await UserModel.findById(id)
    const new_secret = user._id + process.env.JWT_SECRET_KEY
    try {
      jwt.verify(token, new_secret)
      if(password && password_confirmation) {
        if(password !== password_confirmation){
          res.send({status: "failed", msg: "Password and Confirm Password does not match"})
        }else{
          const salt = await bcrypt.genSalt(10);
          const newHashPassword = await bcrypt.hash(password, salt);
          await UserModel.findByIdAndUpdate(user._id,{
            $set : {password: newHashPassword},
          });
          res.send({
            status : "success",
            msg : "Password changed successfully"
          });
        }
      }else{
        res.send({status: "failed", msg: "All fields are required"})
      }
    } catch (error) {
      console.log(error)
      res.send({status: "failed", msg: "Invalid token"})
    }
    
  }


  static userLogout = async (req, res) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      // Add the token to the blacklist
      const blacklistedToken = new TokenBlacklist({ token });
      await blacklistedToken.save();
      
      res.send({ status: "success", msg: "Logout successful" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "failed", msg: "Logout failed" });
    }
  };


  static loggedUser = async (req, res) => {
    try {
      if (!req.user) {
        return res.status(404).send({ status: "failed", msg: "User not found" });
      }
      res.send({ status: "success", data: req.user });
    } catch (error) {
      console.log("Error in loggedUser:", error);
      res.status(500).send({ status: "failed", msg: "Server Error" });
    }
  };


}

module.exports = UserControllers;
