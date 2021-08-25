const { MessageType } = require('@adiwajshing/baileys')
const WSF = require('wa-sticker-formatter')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let wsf = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas gambar dengan caption *${usedPrefix + command}*`
      wsf = new WSF.Sticker(img, {
        pack: global.packname,
        author: global.author,
        crop: false
      })
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
      let img = await q.download()
      if (!img) throw `balas video/gif dengan caption *${usedPrefix + command}*`
      wsf = new WSF.Sticker(img, {
        pack: global.packname,
        author: global.author,
        crop: false
      })
    } else if (/webp/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas sticker dengan caption *${usedPrefix + command}*`
      wsf = new WSF.Sticker(img, {
        pack: global.packname,
        author: global.author,
        crop: false
      })
    }
  } finally {
    if (wsf) {
      await wsf.build()
      const stiker = await wsf.get()
      if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m, mimetype: 'image/webp'})
    }
    else throw 'Conversion failed'
  }
}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
