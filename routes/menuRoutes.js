const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Halaman katalog dan filter kategori menggunakan Query Parameter.
router.get('/', menuController.showCatalog);

// Halaman detail berdasarkan ID menggunakan Route Parameter.
router.get('/menu/:id', menuController.showDetail);

module.exports = router;