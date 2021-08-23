let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) return m.reply('Siapa yang mau di unbanned?')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return m.reply('Tag salah satu lah')
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `Berhasil unbanned user!`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

module.exports = handler
