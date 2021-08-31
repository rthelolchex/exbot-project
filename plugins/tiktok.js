const { MessageType } = require('@adiwajshing/baileys')
const { getTikTokMedia } = require('../lib/scrape')
const isUrl = require('is-url')
const fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
    if (!text || isUrl(text) === false) {
        return m.reply("Masukkan url yang valid!\nContoh: https://www.tiktok.com/@bucinparkjimin7/video/6903432183768272129")
    }
    const data = await getTikTokMedia(text)
    let str = `
Link ditemukan!

Link video : ${data.nowm}

_Silahkan tunggu sebentar, mengirim video... Jika lebih dari 5 menit tidak terkirim, silahkan klik link video untuk mengunduh!_
    `.trim()
    const resbuffer = await fetch(data.nowm, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
    const buffer = await resbuffer.buffer()
    conn.reply(m.chat, str, m)
    if (buffer) conn.sendMessage(m.chat, buffer, MessageType.video, { quoted: m, caption: "Udah bang, nih" })
}

handler.help = ['tiktok <url>', 'tt <url>']
handler.tags = ['downloader']

handler.command = /^(tiktok)?(tt)?$/i
handler.premium = true

module.exports = handler