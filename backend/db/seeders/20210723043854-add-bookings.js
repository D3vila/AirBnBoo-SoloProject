'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Bookings', [
      { "spotId": 1, "userId": 1, "startDate": new Date(), "endDate": new Date(), "createdAt": new Date(), "updatedAt": new Date() },
      { "spotId": 5, "userId": 1, "startDate": new Date(), "endDate": new Date(), "createdAt": new Date(), "updatedAt": new Date() },
      { "spotId": 8, "userId": 1, "startDate": new Date(), "endDate": new Date(), "createdAt": new Date(), "updatedAt": new Date() },
      { "spotId": 3, "userId": 1, "startDate": new Date(), "endDate": new Date(), "createdAt": new Date(), "updatedAt": new Date() },
      { "spotId": 9, "userId": 1, "startDate": new Date(), "endDate": new Date(), "createdAt": new Date(), "updatedAt": new Date() },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
