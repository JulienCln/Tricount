const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/tricount', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connexion réussie !');
  } catch (error) {
    console.error('Erreur de connexion :', error);
  }
};

module.exports = { connectToDatabase };
