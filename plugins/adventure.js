// Thanks to https://github.com/BochilGaming for this command :)
// Alias BochilGaming

let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix }) => { 
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (300000 - __timers) 
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].healt > 79) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
            let armor = global.db.data.users[m.sender].armor
            let ____health = `${Math.floor(Math.random() * 101)}`.trim()
            let ___health = (____health * 1)
            let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
            let __health = (___health > 60 ? ___health - armornya : ___health)
            let healt = (armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : armor > 0 ? __health : ___health)
            let exp = (Math.floor(Math.random() * 400))
            let mora = `${Math.floor(Math.random() * 400)}`.trim() 
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _common = `${Math.floor(Math.random() * 3)}`.trim()
            let common = (_common * 1)
            let _exquisite = `${Math.floor(Math.random() * 2)}`.trim()
            let exquisite = (_exquisite * 1) 
            let _precious = `${pickRandom([0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0])}`
            let precious = (_precious * 1)
            let _luxurious = `${pickRandom([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])}`
            let sampah = `${Math.floor(Math.random() * 300)}`.trim()
            let luxurious = (_luxurious * 1)
            let str = `
HP mu berkurang -${healt * 1} karena kamu telah berpetualang sampai ${pickRandom(['Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', `Khaenri'ah`, 'Chasm', 'Celestia', 'Markas Abyss Order', 'Snezhnaya'])} dan mendapatkan
*Exp:* ${exp} 
*Mora:* ${mora}
*Sampah:* ${sampah}${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${common == 0 ? '' : '\n*Common chest:* ' + common + ''}${exquisite == 0 ? '' : '\n*Exquisite chest:* ' + exquisite + ''}
`.trim()
            conn.reply(m.chat, str, m)
            if (precious > 0) {
                   global.db.data.users[m.sender].precious += precious * 1
                   conn.reply(m.chat, '*Selamat anda mendapatkan item langka yaitu*\n' + precious + ' Precious Chest', m)
            }
            if (luxurious > 0) {
                global.db.data.users[m.sender].luxurious += luxurious * 1
                conn.reply(m.chat, '*Selamat anda mendapatkan item langka yaitu*\n' + luxurious + ' Luxurious Chest', m)
            }
            global.db.data.users[m.sender].healt -= healt * 1
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].mora += mora * 1
            global.db.data.users[m.sender].potion += potion * 1
            global.db.data.users[m.sender].common += common * 1 
            global.db.data.users[m.sender].exquisite += exquisite * 1
            global.db.data.users[m.sender].sampah += sampah * 1
            global.db.data.users[m.sender].lastadventure = new Date * 1
            } else conn.reply(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi`, m)
        } else conn.reply(m.chat, 'Minimal 80 HP untuk bisa berpetualang, beli nyawa dulu dengan ketik *' + usedPrefix + 'shop buy potion <jumlah>*\ndan ketik *' + usedPrefix + 'use potion <jumlah>*\n\n_Untuk mendapat money dan potion gratis ketik_ *' + usedPrefix + 'claim*', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}
handler.help = ['adventure', 'petualang', 'berpetualang', 'mulung', 'work']
handler.tags = ['game']
handler.command = /^(adventure|(ber)?petualang(ang)?|mulung|work)$/i

handler.maintenance = true
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}