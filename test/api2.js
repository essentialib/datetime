const bot = BotManager.getCurrentBot();
const { DateTime } = require("DateTime");

function onMessage(msg) {
	if (msg.content.startsWith("parse ")) {
		const content = msg.content.substr(6);
		const dt = DateTime.parse(content);
		msg.reply(dt.toString());
	}
}
bot.addListener(Event.MESSAGE, onMessage);