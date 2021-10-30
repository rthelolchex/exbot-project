const { MessageType } = require('@adiwajshing/baileys')
const { addExif } = require('../lib/exif')
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')
const crypto = require('crypto')
const { removeBackgroundFromImageFile } = require('remove.bg')
const keyrmbg = 'HuTPUXBBSPA2umFVbFTmyUe2'
const { exec } = require('child_process')

let handler = async(m, { conn, text }) => {
    let q = m.quoted ? m.quoted : m
    let media = await q.download('./tmp/img')
    let ranp = './tmp/img_nobg.png'
    let ranw = './tmp/img_nobg.webp'
    if (text === "nobg") {
      await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return m.reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, async (err) => {
								fs.unlinkSync(ranp)
								if (err) return m.reply("Terjadi kesalahan.")
								snobg = await addExif(fs.readFileSync('./tmp/img_nobg.webp'), global.packname, global.author)
									conn.sendMessage(m.chat, snobg, MessageType.sticker, {quoted: m})
									fs.unlinkSync(ranw)
								})
							})
						}
    else await ffmpeg(media)
    .input(media)
    .on('error', function (err) {
        console.log("Error : " + err)
        return err
    })
    .on('end', async function() {
        m.reply('Sticker is done!')
        stiker = await addExif(fs.readFileSync('./tmp/img.webp'), global.packname, global.author)
        conn.sendMessage(m.chat, stiker, MessageType.sticker)
        fs.unlinkSync('./tmp/img.webp')
        fs.unlinkSync(media)
    })
    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
    .toFormat('webp')
    .save('./tmp/img.webp')
}

handler.help = ['sticker (reply media atau caption)', 'stiker (reply media atau caption)', 'stickergif (reply media atau caption)', 'stikergif (reply media atau caption)']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

module.exports = handler
