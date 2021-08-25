const { MessageType } = require('@adiwajshing/baileys')
const levelling = require('../lib/levelling')
let handler = async(m, { conn, text }) => {
    let user = global.db.data.users[m.sender]
    let healt = user.healt
    let mora = user.mora
    let exp = user.exp
    let primogems = user.primogems
    let potion = user.potion
    let common = user.common
    let exquisite = user.exquisite
    let luxurious = user.luxurious
    let sampah = user.sampah
    let level = user.level
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let { max } = levelling.xpRange(level, global.multiplier)
    let str = `
Inventory *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\n

HP : ${healt}
Mora : ${mora}
Primogems : ${primogems}

*Inventory*
Potion : ${potion}
Sampah : ${sampah}

Total item : ${potion + sampah} item

*Chests*
- Common chest : ${common}
- Exquisite chest : ${exquisite}
- Luxurious chest : ${luxurious}

- Total chest yang belum dibuka : ${common + exquisite + luxurious} chest

*Progress*
Level : ${level}
EXP : ${exp} - ${max}
[${max - exp} lagi untuk levelup]
    `.trim()
    m.reply(str)
}

handler.help = ['inventory', 'inv']
handler.tags = []

handler.command = /^inv(entory)?$/i
handler.maintenance = true

module.exports = handler