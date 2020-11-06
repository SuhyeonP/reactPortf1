const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Store=require('./store')(sequelize,Sequelize)
db.Review=require('./review')(sequelize,Sequelize)
db.Image=require('./image')(sequelize,Sequelize)
db.User=require('./user')(sequelize,Sequelize)


Object.keys(db).forEach(modelName => { //associate 관계 연결해주는거
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;