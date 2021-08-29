import md5 from 'md5';
const VERCEL_URL = process.env.VERCEL_URL;
const TCKEY = process.env.TCKEY;
class HelpService {
    constructor(bot, id) {
        this.bot = bot;
        this.id = id;
    }

    async help() {
        try {
            let message = 'I can help you search subtitles.\n\nYou can control me by sending these commands:\n\n';
            message += '<i>/sendkey - 来获取你的 sendkey 和 api url</i>\n';

            await this.bot.sendMessage(this.id, message, { parse_mode: 'HTML' });
        } catch (error) {
            console.error(error);

            await this.bot.sendMessage(this.id, 'Error, try again later');
        }
    }

    async sendkey() {
        try {
            const sendkey = this.id + 'T' + md5(TCKEY + this.id);
            const site_url = VERCEL_URL;
            let message = `Your sendkey is 🔑 ${sendkey} \n 
            🚀 Use follow url to send message : \n 
            ${site_url}/send?sendkey=<sendkey>&text=<text>`;
            await this.bot.sendMessage(this.id, message);
        } catch (error) {
            console.error(error);

            await this.bot.sendMessage(this.id, 'Error, try again later');
        }
    }
}

module.exports = HelpService;