process.env.NTBA_FIX_319 = 1;
var url = require('url');
import md5 from 'md5';
import axios from 'axios';
require('dotenv').config();
const BOT_TOKEN = process.env.BOT_TOKEN;
const TCKEY = process.env.TCKEY;
const TelegramBot = require('node-telegram-bot-api');
const { BotController } = require('../server/controllers');
module.exports = async(req, res) => {
    try {
        const { body } = req;
        if (req.url.substring(0, 5) == '/send') {
            let text = req.query.text || req.body.text || "";
            text = decodeURI(text.replace(/\\n/g, '\n'))
            console.log(text)
            const sendkey = req.query.sendkey || req.body.sendkey || "";
            if (text == "" || sendkey == "") {
                throw new Error('text & sendkey cannot be empty');
            } else {
                const key_info = sendkey.split("T");

                if (key_info[1] != md5(TCKEY + key_info[0])) {
                    throw new Error('sendkey error');
                } else {
                    var params = new URLSearchParams();
                    params.append("chat_id", key_info[0]);
                    let content = text;

                    params.append("text", content);
                    params.append("parse_mode", "HTML");
                    const ret = await axios.post("https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage", params);
                    res.status(200).json(ret.data);
                }
            }
        } else if (body && (typeof(body.message) != "undefined")) {
            const { chat: { id }, text } = body.message;
            const bot = new TelegramBot(BOT_TOKEN);
            const botController = new BotController(bot, id, text);

            await botController.handle();
        } else {
            res.status(200).json('running');
        }
    } catch (error) {
        console.error(error);
        res.json(error.message);
    } finally {
        res.send();
    }
};