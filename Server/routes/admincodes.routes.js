const express = require('express');
const { uploadCode, getCodes } = require('../controllers/admincode.Controllers');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudinary } = require('../config/cloudinary');

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'admin_codes',
  },
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), uploadCode);
router.get('/codes', getCodes); // New route for fetching data

module.exports = router;
