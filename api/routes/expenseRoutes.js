const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// new Dépense
router.post('/', expenseController.createExpense);

// get Dépenses
router.get('/', expenseController.getAllExpenses);

// update Dépense
router.put('/:id', expenseController.updateExpense);

// delete Dépense
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;
