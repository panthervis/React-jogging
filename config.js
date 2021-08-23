const dotenv = require('dotenv');

// initializing env variables
try {
  dotenv.config();
} catch (e) {
  console.log('Could not find .env file. Continuing..'); // eslint-disable-line
}

module.exports = {
  mongoURL: "mongodb://localhost:27017/toptal-jogging",
  jwtSecret: process.env.JWT_SECRET,
  jwtExpires: '30d',
};
