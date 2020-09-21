"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          id : "1",
          name: "Gunung",     
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id : "2",
          name: "Alam",     
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id : "3",
          name: "Danau",     
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id : "4",
          name: "Pantai",     
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id : "5",
          name: "Wahana",     
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
