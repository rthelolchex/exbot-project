const { MessageType } = require('@adiwajshing/baileys')
const { GIGetInformationUser, GIClaimReward } = require('../lib/scrape')

let handler = async(m, { conn, text, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (!text) throw `Isi cookie!`
    let getInfo = await GIGetInformationUser(text)
    if (getInfo) {
        let data = getInfo.data.list[0]
        let str = `
Info ditemukan!
Nickname : ${data.nickname}
UID : ${data.game_uid}
Adventure Rank : ${data.level}
Server : ${data.region_name}

_Data cookie berhasil disimpan, mohon digunakan dengan bijak!_
        `.trim()
        conn.reply(m.chat, str, m)
    }
    user.GICookie = text
}

handler.private = true

handler.help = ['gigetcookie']
handler.tags = ['gi']

handler.command = /^(gigetcookie)$/i


module.exports = handler