let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) return m.reply('Tag salah satu lah')
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) return m.reply('Masukkan jumlah exp yang akan diberi')
  if (isNaN(txt)) return m.reply('Hanya angka')
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) return m.reply('Minimal 1')
  let users = global.db.data.users
  if (exp > users[m.sender].exp) return m.reply('Exp tidak mencukupi untuk mentransfer')
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`(${-xp} XP) + (${-pjk} XP (Pajak 2%)) = ( ${-exp} XP)`)
  conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
handler.help = ['pay @user <amount>']
handler.tags = ['xp']
handler.command = /^pay$/
handler.rowner = true

module.exports = handler

