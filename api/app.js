const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const balanceRoutes = require('./routes/balanceRoutes');
const { connectToDatabase } = require('./services/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/balance', balanceRoutes);
app.use('/categories', categoryRoutes);
app.use('/expenses', expenseRoutes);
app.use('/users', userRoutes);


// Connect to MongoDB
connectToDatabase()
  .then(() => {
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
