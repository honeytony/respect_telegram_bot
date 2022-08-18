const TelegramApi = require('node-telegram-bot-api');
const token = '5664046948:AAFTGBXi2YyS_56gDzSECOwsAf3OBLp8G2I';
const bot = new TelegramApi(token, { polling: true });

const names = [
    'эрик',
    'эрику',
    'эрика',
    'антон',
    'антону',
    'антона',
    'ксюша',
    'ксюшу',
    'ксюше',
    'артем',
    'артема',
    'артему',
    'слава',
    'славе',
    'славу',
    'матвей',
    'матвея',
    'матвею',
    'никита',
    'никите',
    'никиту',
    'рустам',
    'рустаму',
    'рустама',
    'даня',
    'даню',
    'дане',
    'даниилу',
    'даниила',
    'даниил',
    'вячеслав',
    'вячеслава',
    'вячеславу',
    'миша',
    'мише',
    'мишу',
    'арина',
    'арине',
    'арину',
    'бот',
    'боту',
    'бота',
    'андрей',
    'андрею',
    'андрея',
    'эндрю',
    'арсений',
    'арсения',
    'арсению',
    'коля',
    'коле',
    'колю',
    'николай',
    'николаю',
    'николая',
    'антон',
    'антон',
    'антон',
];

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    let namesInMessage = msg.text.split(' ');

    console.log('Пришло сообщение: ' + msg.text);

    message = '';

    let includes = false;

    namesInMessage.forEach((el) => {
        if (names.includes(el)) {
            includes = true;
            el.split('').forEach((name, index) => {
                if (index === 0 && name[index].toLowerCase() === name[index]) {
                    message += name.toUpperCase();
                } else {
                    message += name;
                }
            });

            message += ' ';
        }
    });

    if (includes == true) {
        bot.sendMessage(chatId, 'Что за неуважение... господи.. правильно будет: ' + message);
    }

    // bot.sendMessage(chatId, msg.text.toLocaleUpperCase());
});
