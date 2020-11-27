const env = {
    database: 'customer',
    username: 'postgres',
    password: 'meetpandit',
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  module.exports = env;