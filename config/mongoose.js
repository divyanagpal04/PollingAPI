const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dishanagpal6:divya3105@pollingcluster.m42p8fe.mongodb.net/pollingAPI?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to Database: MongoDB');
});

module.exports = db;
