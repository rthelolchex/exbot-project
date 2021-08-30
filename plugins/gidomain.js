const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')

let handler = async(m, { conn, text }) => {
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let hari = d.toLocaleDateString(locale, { weekday: 'long' })
    if (!text) {
    if (hari === 'Senin' || hari === 'Kamis') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/domain/sk.jpg'), MessageType.image, { quoted: m, thumbnail: fs.readFileSync('./gi/domain/sk.jpg'), caption: "Thanks to https://instagram.com/genshinbuild.id,\n© ExBot - Project by rthelolchex"})
    }
    if (hari === 'Selasa' || hari === 'Jumat' || hari === `Jum'at`) {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/domain/sj.jpg'), MessageType.image, { quoted: m, thumbnail: fs.readFileSync('./gi/domain/sj.jpg'), caption: "Thanks to https://instagram.com/genshinbuild.id,\n© ExBot - Project by rthelolchex"})
    }
    if (hari === 'Rabu' || hari === 'Sabtu') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/domain/rs.jpg'), MessageType.image, { quoted: m, thumbnail: fs.readFileSync('./gi/domain/rs.jpg'), caption: "Thanks to https://instagram.com/genshinbuild.id,\n© ExBot - Project by rthelolchex"})
    }
}
    if (text === 'inazuma' || text === "Inazuma") {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/domain/inazuma.jpg'), MessageType.image, { quoted: m, thumbnail: fs.readFileSync('./gi/domain/inazuma.jpg'), caption: "Thanks to https://instagram.com/genshinbuild.id,\n© ExBot - Project by rthelolchex"})
    }
}

handler.help = ['gidomain']
handler.tags = ['gi']

handler.command = /^(gidomain)$/i

module.exports = handler