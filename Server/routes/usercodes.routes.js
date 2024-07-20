const express = require('express');
const { uploadUserCode, getUserCodes } = require('../controllers/usercode');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudinary } = require('../config/cloudinary');

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'user_codes',
  },
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), uploadUserCode);
router.get('/codes', getUserCodes);

module.exports = router;
