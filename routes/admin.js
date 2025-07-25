const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const upload = require('../middleware/upload');

// Admin Dashboard
router.get('/', adminController.getDashboard);

// Add Movie
router.get('/add', adminController.getAddMovie);
router.post('/add', upload.single('poster'), adminController.postAddMovie);

// Edit Movie
router.get('/edit/:id', adminController.getEditMovie);
router.post('/edit/:id', upload.single('poster'), adminController.postEditMovie);

// Delete Movie
router.get('/delete/:id', adminController.deleteMovie);

// View Movie
router.get('/view/:id', adminController.viewMovie);

module.exports = router;
