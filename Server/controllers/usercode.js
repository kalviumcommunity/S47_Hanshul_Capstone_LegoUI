const UserCode = require('../model/UserCodes');

const uploadUserCode = async (req, res) => {
  try {
    const { title, description, sourceCodePath, githublink, html, css, js,useremail } = req.body;
    const imagePath = req.file.path;
    // const useremail = req.file.path;

    const newCode = new UserCode({
      title,
      description,
      imagePath,
      sourceCodePath,
      githublink,
      html,
      css,
      js,
      useremail,
    });
    await newCode.save();
    res.status(201).send('Data uploaded successfully');
  } catch (error) {
    console.error('Error uploading data', error);
    res.status(500).send('Failed to upload data');
  }
};

const getUserCodes = async (req, res) => {
  try {
    const codes = await UserCode.find();
    res.status(200).json(codes);
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).send('Failed to fetch data');
  }
};

module.exports = { uploadUserCode, getUserCodes };
