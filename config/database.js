// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('sge_js', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// module.exports = sequelize;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './sge_js.sqlite'
});

module.exports = sequelize;
