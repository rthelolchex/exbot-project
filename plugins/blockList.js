let handler = async (m, { conn }) => {
    let blocked = conn.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
    let head = `
╭────────────────────
╞═══ 《 *Daftar terblokir* 》 ═══
├────────────────────
    `.trim()
    conn.reply(m.chat, head + `\n` + blocked.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join`\n` + `\n╰────────────────────`, m, { contextInfo: { mentionedJid: blocked } })
}
handler.help = ['blocklist']
handler.tags = ['owner']
handler.command = /^listbloc?k|bloc?klist|daftarbloc?k$/i

handler.owner = true

module.exports = handler