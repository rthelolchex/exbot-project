let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return m.reply('Tag salah satu lah')
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) return m.reply('Masukkan jumlah Limit yang akan diberi')
    if (isNaN(txt)) return m.reply('Hanya angka')
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) return m.reply('Minimal 1')
    let users = global.db.data.users
    if (limit > users[m.sender].limit) return m.reply('Limit tidak mencukupi untuk mentransfer')
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Limit) + (${-pjk} Limit (Pajak 2%)) = ( ${-limit} Limit)`)
    conn.fakeReply(m.chat, `+${poin} Limit`, who, m.text)
}
handler.help = ['paylimit @user <amount>']
handler.tags = ['xp']
handler.command = /^paylimit$/
handler.rowner = false

module.exports = handler

