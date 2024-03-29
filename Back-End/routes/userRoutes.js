const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/userControllers');
const    checkUserAuth  = require('../middlewares/auth.middleware');

// Route level Middleware - to protect Route

router.use('/changepassword', checkUserAuth) 


//Public Routes
router.post('/register', UserControllers.userRegistration);
router.post('/login', UserControllers.userLogin);


//Protected Routes

router.post('/changepassword', UserControllers.changeUserPassword);

module.exports = router