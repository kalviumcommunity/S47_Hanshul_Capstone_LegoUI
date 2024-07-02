const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/userControllers');
const checkUserAuth  = require('../middlewares/auth.middleware');

// Route level Middleware - to protect Route

router.use('/changepassword', checkUserAuth) 
router.use('/loggedUser', checkUserAuth) 


//Public Routes
router.post('/register', UserControllers.userRegistration);
router.post('/login', UserControllers.userLogin);
router.post('/send-reset-password-email', UserControllers.sendUserPasswordResetEmail);
router.post('/reset-password/:id/:token', UserControllers.sendUserPasswordReset);


//Protected Routes

router.post('/changepassword', UserControllers.changeUserPassword);
router.get('/loggedUser', UserControllers.loggedUser);

module.exports = router