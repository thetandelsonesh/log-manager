'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING(120)
      },
      info: {
        type: Sequelize.TEXT
      },
      client: {
        type: Sequelize.STRING(120)
      },
      client_email_id: {
        type: Sequelize.STRING(120)
      },
      estimate: {
        type: Sequelize.INTEGER.UNSIGNED
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
    await queryInterface.dropTable('projects');
  }
};