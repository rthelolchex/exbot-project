const { MessageType } = require('@adiwajshing/baileys')
const { GIGetInformationUser, GIClaimReward } = require('../lib/scrape')

let handler = async(m, { conn, text, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (!user.GICookie) throw `Silahkan buat cookie untuk login, ketik ${usedPrefix}gigetcookie <cookie> untuk membuat cookie\nTutorial coming soon yaa`
    let claimreward = await GIClaimReward(user.GICookie)
    if (claimreward) {
        if (claimreward.message === `Traveler, you've already checked in today~`) return conn.reply(m.chat, "Anda sudah mengklaim daily hari ini", m)
        else if (claimreward.message === 'OK') conn.reply(m.chat, "Berhasil claim daily, silahkan login dan cek mail untuk melanjutkan", m)
    }
}

handler.help = ['gidailyclaim']
handler.tags = ['gi']

handler.command = /^(gidailyclaim)$/i


module.exports = handler