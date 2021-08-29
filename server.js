process.env.NTBA_FIX_319 = 1;

require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const BOT_TOKEN = process.env.BOT_TOKEN;
const { BotController } = require('./server/controllers');

const bot = new TelegramBot(BOT_TOKEN, { polling: true });
const botController = new BotController(bot);

botController.handle(false);