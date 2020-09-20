'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING(120)
      },
      dob: {
        type: Sequelize.DATEONLY
      },
      gender: {
        type: Sequelize.ENUM,
        values:['MALE', 'FEMALE', 'OTHERS'],
      },
      email_id: {
        type: Sequelize.STRING(120),
      },
      employee_id: {
        type: Sequelize.STRING(50)
      },
      designation: {
        type: Sequelize.STRING(120)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employees');
  }
};