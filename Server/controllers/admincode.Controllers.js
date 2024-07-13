const Code = require('../model/AdminCodes');

const uploadCode = async (req, res) => {
  try {
    const { title, description, sourceCodePath, html, css, js, } = req.body;
    const imagePath = req.file.path;

    const newCode = new Code({
      title,
      description,
      imagePath,
      sourceCodePath,
      html,
      css,
      js,
    });
    await newCode.save();
    res.status(201).send('Data uploaded successfully');
  } catch (error) {
    console.error('Error uploading data', error);
    res.status(500).send('Failed to upload data');
  }
};

const getCodes = async (req, res) => {
  try {
    const codes = await Code.find();
    res.status(200).json(codes);
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).send('Failed to fetch data');
  }
};

module.exports = { uploadCode, getCodes };
