const {
  PORT,

  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE,
  MONGO_USERNAME,
  MONGO_PASSWORD,

  JWT_SECRET_KEY,
  JWT_EXPIRES_TIME,
  NODE_ENV,
  DOCUMENT_PORT,
} = process.env;

const { A_WEEK } = require('../constants');

module.exports = {
  PORT: parseInt(PORT, 10) || 3000,
  MONGO_URI: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`,
  JWT_SECRET_KEY,
  JWT_EXPIRES_TIME: parseInt(JWT_EXPIRES_TIME, 10) || A_WEEK,
  NODE_ENV: NODE_ENV || 'develop',
  DOCUMENT_PORT: parseInt(DOCUMENT_PORT, 10) || 3001,
};
