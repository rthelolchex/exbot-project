let fetch = require("node-fetch")

let handler = async (m, { conn, text }) => {
  let res = await fetch(global.API('https://meme-api.herokuapp.com', '/gimme/' + encodeURI(text || ''), {}))
  if (!res.ok) return m.reply(await res.text())
  let json = await res.json()
  if (!json.url) return m.reply('Media tidak ditemukan!')
  if (json.nsfw) return m.reply('Content blocked')
  await conn.sendFile(m.chat, json.url, text, json.title, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['subreddit <query>']
handler.tags = ['internet']
handler.command = /^(sr|subreddit)$/i

module.exports = handler
