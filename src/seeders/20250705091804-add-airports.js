'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert( 'Airports', [
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        address: 'Mumbai, Maharashtra',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jaipur International Airport',
        address: 'Jaipur, Rajasthan',
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Devi Ahilyabai Holkar Airport',
        address: 'Indore, Madhya Pradesh',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jay Prakash Narayan Airport',
        address: 'Patna, Bihar',
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
         
     ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
