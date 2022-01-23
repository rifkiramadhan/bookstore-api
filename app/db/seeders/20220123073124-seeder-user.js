'use strict';
const bcrypt = require('bcryptjs');

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
    const password = bcrypt.hashSync('rahasia', 10);
    await queryInterface.bulkInsert('Users', 
      [
        {
          id: 1,
          name: 'John Doe',
          email: 'admin@gmail.com',
          password: password,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Rifki Ramadhan',
          email: 'rifki@gmail.com',
          password: password,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], 
      {}
    );
  },
  
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
