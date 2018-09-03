module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    message_id: DataTypes.BIGINT,
    user_id: DataTypes.BIGINT,
    user_first_name: DataTypes.STRING,
    user_last_name: DataTypes.STRING,
    user_username: DataTypes.STRING,
    user_language_code: DataTypes.STRING,
    chat_id: DataTypes.BIGINT,
    chat_title: DataTypes.STRING,
    chat_username: DataTypes.STRING,
    chat_type: DataTypes.STRING,
    date: DataTypes.INTEGER,
    text: DataTypes.STRING,
    reply_to_message_id: DataTypes.BIGINT,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};