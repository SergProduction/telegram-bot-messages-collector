const Telegraf = require('telegraf')
const SocksAgent = require('socks5-https-client/lib/Agent')
const models = require('../models')


const envResult = require('dotenv').config()

if (envResult.error) {
  throw envResult.error
}

const env = envResult.parsed


telergafMessageForUserModel = (message) => ({
  message_id: message.message_id,
  user_id: message.from.id,
  user_first_name: message.from.first_name,
  user_last_name: message.from.last_name,
  user_username: message.from.username,
  user_language_code: message.from.language_code,
  chat_id: message.chat.id,
  chat_title: message.chat.title,
  chat_username: message.chat.username,
  chat_type: message.chat.type,
  date: message.date,
  text: message.text,
  reply_to_message_id: message.reply_to_message
    ? message.reply_to_message.message_id
    : null,
})

const socksAgent = new SocksAgent({
  socksHost: env.SOCKS_HOST,
  socksPort: env.SOCKS_PORT,
  socksUsername: env.SOCKS_USERNAME,
  socksPassword: env.SOCKS_PASSWORD,
});

const bot = new Telegraf(env.BOT_TOKEN, {
  username: 'message_collector_for_ai_bot',
  telegram: { agent: socksAgent },
})

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
})


bot.start((ctx) => ctx.reply('Welcome!'))


bot.on('text', (ctx) => {
  models.User.create(telergafMessageForUserModel(ctx.message))
})


bot.catch((err) => {
  console.log('Ooops', err)
})

bot.startPolling()