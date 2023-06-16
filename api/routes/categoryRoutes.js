const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// new Catégorie
router.post('/', categoryController.createCategory);

// get Catégories
router.get('/', categoryController.getAllCategories);

// get Catégorie
router.get('/:id', categoryController.getCategoryByID);

module.exports = router;
