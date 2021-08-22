const got = require("got")
let fetch = require('node-fetch')
const isUrl = require("is-url")
const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, args, text }) => {
  if (!text || isUrl(text) === false) {
            return m.reply("Masukkan url yang valid!")
          }
          got(text).then(async (res) => {
            let title = res.body.split('"og:title" content="')[1].split('" />')[0]
            let igtype = res.body.split('"og:type" content="')[1].split('" />')[0]
            var data = res.body.split('"og:image" content="')[1].split('" />')[0]
            if (igtype === 'video') {
              data = res.body.split('"og:video" content="')[1].split('" />')[0]
            }
            m.reply(`Link ditemukan!\nTitle : ${title}\nFileType : ${igtype}\nLink : ${data}`)
            const resf = await fetch(data, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
            const buff = await resf.buffer()
            if (igtype === 'instapp:photo') {
              conn.sendMessage(m.chat, buff, MessageType.image, { quoted: m, caption: "Udah bang, nih" })
            } else conn.sendMessage(m.chat, buff, MessageType.video, { quoted: m, caption: 'Udah bang, nih'})
})
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

module.exports = handler
