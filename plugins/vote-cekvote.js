const path = require('path')
const fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${usedPrefix}mulaivote* - untuk memulai vote`

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
│ ${upvote.map(u => '@' + u.split('@')[0]).join(`\n│ `)}
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
│ ${usedPrefix}deletevote untuk hapus vote.
╰─── 《 *Powered by ${npmname}* 》 ───
    `.trim()
    conn.send3Button(m.chat, str, "Made with hand by rthelolchex", "Upvote", '.upvote', 'Devote', '.devote', 'Hapus vote', '.deletevote', { contextInfo: { mentionedJid } })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.group = true
module.exports = handler
