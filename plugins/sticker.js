const { MessageType } = require('@adiwajshing/baileys')
const { addExif } = require('../lib/exif')
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')
const crypto = require('crypto')

let handler = async(m, { conn, text }) => {
    let q = m.quoted ? m.quoted : m
    let media = await q.download('./tmp/img')
    await ffmpeg(media)
    .input(media)
    .on('error', function (err) {
        console.log("Error : " + err)
        return err
    })
    .on('end', async function() {
        console.log('Sticker is done!')
        stiker = await addExif(fs.readFileSync('./tmp/img.webp'), global.packname, global.author)
        conn.sendMessage(m.chat, stiker, MessageType.sticker)
        fs.unlinkSync('./tmp/img.webp')
        fs.unlinkSync(media)
    })
    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
    .toFormat('webp')
    .save('./tmp/img.webp')
}

handler.command = /^sticker$/i

module.exports = handler