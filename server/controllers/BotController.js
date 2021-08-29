const {
    HelpService
} = require('../services');

class MessageController {
    constructor(bot, id, text) {
        this.bot = bot;
        this.id = id;
        this.text = text;
    }

    async handle() {
        try {
            if (this.text === '/start' || this.text === '/help') {
                const helpService = new HelpService(this.bot, this.id);

                await helpService.help(this.bot, this.id);
            } else if (this.text === '/sendkey') {
                const helpService = new HelpService(this.bot, this.id);

                await helpService.sendkey(this.bot, this.id);
            }
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = MessageController;