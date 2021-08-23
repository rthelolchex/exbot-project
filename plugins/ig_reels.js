const got = require('got')
const isUrl = require('is-url')
const fetch = require('node-fetch')
const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, args, text }) => {
  if (!text || isUrl(text) === false) {
        return m.reply("Masukkan url yang valid!")
    }
    if (text.includes('utm_medium=copy_link')) text = text.replace('utm_medium=copy_link', '__a=1')
    console.log(text)
    got(text).then(async (res) => {
      let data = res.body.split('"video_url":"')[1].split('"')[0]
      m.reply(`Link ditemukan!\nLink : ${data}`)
      const resf = await fetch(data, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
      const buff = await resf.buffer()
      conn.sendMessage(m.chat, buff, MessageType.video, { quoted: m, caption: "Udah bang, nih"})
    })
}
handler.help = ['igreels'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(reels)?)$/i

module.exports = handler
