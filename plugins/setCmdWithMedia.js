module.exports = Object.assign(async function handler(m, { text }) {
    global.db.data.sticker = global.db.data.sticker || {}
    if (!m.quoted) return m.reply('Reply Pesan!')
    if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
    if (!text) return m.reply(`Tidak ada teks`)
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (sticker[hash] && sticker[hash].locked) return m.reply('You have no permission to change this sticker command')
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Done!`)
}, {
    help: ['cmd'].map(v => 'set' + v + ' <text>'),
    tags: ['database'],
    command: ['setcmd']
})
