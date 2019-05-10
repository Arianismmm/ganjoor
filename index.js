const TelegramToken = '868164089:AAELdiwZL0OcVYG5yQrEfIuOT1Oz6DChOdA'
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(TelegramToken)
const axios = require('axios')
bot.start((ctx) => ctx.reply('با سلام خوش آمدید برای دریافت کسشر لمس کنید', Markup.inlineKeyboard([
    Markup.callbackButton('دریافت کسشر جدید', 'newFal'),
]).extra()))
bot.action('newFal', async (ctx) => {
    res = await axios.get('http://c.ganjoor.net/beyt-json.php')
    return ctx.reply(`${res.data.m1} / ${res.data.m2} - ${res.data.poet}`, Markup.inlineKeyboard([
        Markup.callbackButton('دریافت کسشر جدید', 'newFal'),
    ]).extra())

    // ctx.reply('با سلام خوش آمدید برای دریافت فال نیت و سپس لمس کنید', Markup.inlineKeyboard([
    //     Markup.callbackButton('دریافت فال جدید', 'newFal'),
    // ]).extra())



})
bot.launch()