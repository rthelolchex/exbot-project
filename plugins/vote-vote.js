const fs = require('fs')
const path = require('path')
let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${usedPrefix}mulaivote* - untuk memulai vote`
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) return m.reply('Kamu sudah vote!')
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    m.reply(`Done!\n\n*${usedPrefix}cekvote* - untuk mengecek vote`)
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let npmname = package.name
    let str = `
╭────────────────────
╞═══ 《 *VOTE* 》 ═══
├────────────────────
│ *Alasan:* ${reason}
├────────────────────
╞═══ 《 *UPVOTE* 》 ═══
├────────────────────
│ Total: ${upvote.length}
│ ${upvote.map(u => '@' + u.split('@')[0]).join('\n')}
├────────────────────
╞═══ 《 *DEVOTE* 》 ═══
├────────────────────
│ Total: ${devote.length} 
│ ${devote.map(u => '@' + u.split('@')[0]).join('\n')}
├────────────────────
│ Klik tombol dibawah jika ingin hapus vote
│ Atau jika tombol sudah abu-abu,
│ Silahkan ketik ${usedPrefix}upvote untuk setuju,
│ ${usedPrefix}devote untuk tidak setuju,
│ ${usedprefix}deletevote untuk hapus vote.
╰─── 《 *Powered by ${npmname}* 》 ───
    `.trim()
    conn.send3Button(m.chat, str, "Made with hand by rthelolchex", "Upvote", '.upvote', 'Devote', '.devote', 'Hapus vote', '.deletevote', { contextInfo: { mentionedJid } })
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i
handler.group = true
module.exports = handler
