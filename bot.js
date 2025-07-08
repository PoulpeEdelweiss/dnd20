const { Telegraf } = require('telegraf');

const bot = new Telegraf('7839179710:AAG0qQi4Fk2noAooGbSIAlCZgzzBy3yfDN0');

bot.start((ctx) => {
  ctx.reply('Нажми кнопку, чтобы открыть кубик d20 🎲', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Открыть d20 🎲',
            web_app: { url: 'https://dnd20.vercel.app/' } // замените на ваш хостинг
          }
        ]
      ]
    }
  });
});

bot.launch();
console.log('Бот запущен');