'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Wallet', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      amount: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Table');
  }
};
