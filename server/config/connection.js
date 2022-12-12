const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travelXDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect(connectionString, {
  useNewUrlParser: true, 
  userUnifiedTopology: true,
})

module.exports = mongoose.connection;
