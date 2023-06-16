const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// new Utilisateur
router.post('/', userController.createUser);

// get Utilisateurs
router.get('/', userController.getAllUsers);

// get Utilisateur
router.get('/:id', userController.getUserByID);

// update Utilisateur
router.put('/:id', userController.updateUser);

// delete Utilisateur
router.delete('/:id', userController.deleteUser);

module.exports = router;
