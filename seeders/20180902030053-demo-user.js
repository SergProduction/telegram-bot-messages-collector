'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      message_id: 1,
      user_id: 1,
      user_first_name: 'test',
      user_last_name: 'test',
      user_username: 'test',
      user_language_code: 'test',
      chat_id: 1,
      chat_title: 'test',
      chat_username: 'test',
      chat_type: 'test',
      date: 1234567890,
      text: 'test',
      reply_to_message_id: 0,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
