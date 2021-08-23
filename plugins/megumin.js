let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) return m.reply(await res.text())
  let json = await res.json()
  if (!json.url) return m.reply('Error!')
  conn.sendFile(m.chat, json.url, '', '?', m)
}
handler.help = ['megumin']
handler.tags = ['internet']
handler.command = /^(megumin)$/i
//ftwrr
module.exports = handler
