const got = require('got')
const isUrl = require('is-url')
const fetch = require('node-fetch')
const { MessageType } = require("@adiwajshing/baileys")
const { getInstagramReels } = require('../lib/scrape')

let handler = async (m, { conn, args, text }) => {
  if (!text || isUrl(text) === false) {
        return m.reply("Masukkan url yang valid!")
    }
    let reels = await getInstagramReels(text)
    let res = reels.result
    let str = `
Link ditemukan!

Title : ${res.title}
URL : ${res.url}
Description : ${res.description}
Total like : ${res.total_like}
Total comments : ${res.total_comment}
Total viewers : ${res.view_count}
Total diputar : ${res.play_count}
Link video : ${res.video_link}

_Silahkan tunggu untuk videonya, jika lebih dari 5 menit tidak terkirim, silahkan klik link video untuk mendownload_
    `.trim()
    const rbuffer = await fetch(res.video_link, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
    const buff = await rbuffer.buffer()
    conn.reply(m.chat, str, m)
    if (buff) conn.sendMessage(m.chat, buff, MessageType.video, { quoted: m, caption: "Udah bang, nih", thumbnail: res.thumbnail })
}
handler.help = ['igreels'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(reels)?)$/i

module.exports = handler
