const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')
const { igstalk } = require('../lib/scrape')
let handler = async(m, { conn, text }) => {
    if (!text) throw `Silahkan masukkan username atau link untuk profil instagramnya!`
    if (text) {
        let data = await igstalk(text)
        let res = await data.result
        let str = `
Username : ${res.username}
Full name : ${res.fullname}
Bio user : ${res.bio}
Followers : ${res.followers}
Followed : ${res.followed}
        `.trim()
        let ppdata = await fetch(res.pplink, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
        let ppbuffer = await ppdata.buffer()
        conn.sendMessage(m.chat, ppbuffer, MessageType.image, { quoted: m, caption: str })
    }
}

handler.help = ['igstalk (username atau link)']
handler.command = /^igstalk$/i

module.exports = handler