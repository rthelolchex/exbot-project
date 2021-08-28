const { spawn } = require('child_process')
const util = require('util')
const { MessageType } = require('@adiwajshing/baileys')
const { takesticker } = require('../lib/takesticker')
const fs = require('fs')

let handler  = async (m, { conn, args, text }) => {
    if (!m.quoted) return m.reply('Tag stickernya om')
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let name = conn.getName(m.sender)
    if (!m.quoted) return m.reply('Tag stickernya om')
    let takestiker = false
    let q = { message: { [m.quoted.mtype]: m.quoted }}
    if (/sticker/.test(m.quoted.mtype)) {
        let file = await conn.downloadM(q)
        spawn('convert', ['webp:-', 'png:-'])
        takestiker = await takesticker(file, false, packname || global.packname, author || global.author)
    }
    if (takestiker) conn.sendMessage(m.chat, takestiker, MessageType.sticker, {
        quoted: m
    })
    else m.reply('Pengonversian gagal.')

}
handler.help = ['takesticker (reply sticker + text)']
handler.tags = ['sticker']
handler.command = /^(wm|takesticker|colong|begal)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.registeredOnly = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

