'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Postings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      description: {
        type: Sequelize.STRING
      },
      prov: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Provinsi",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      kota: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Kota",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      createdBy: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Postings');
  }
};