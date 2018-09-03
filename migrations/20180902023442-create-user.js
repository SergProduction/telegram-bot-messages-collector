'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message_id: Sequelize.BIGINT,
      user_id: Sequelize.BIGINT,
      user_first_name: Sequelize.STRING,
      user_last_name: Sequelize.STRING,
      user_username: Sequelize.STRING,
      user_language_code: Sequelize.STRING,
      chat_id: Sequelize.BIGINT,
      chat_title: Sequelize.STRING,
      chat_username: Sequelize.STRING,
      chat_type: Sequelize.STRING,
      date: Sequelize.INTEGER,
      text: Sequelize.STRING,
      reply_to_message_id: Sequelize.BIGINT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};