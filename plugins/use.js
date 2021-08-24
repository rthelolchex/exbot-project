// Thanks to https://github.com/BochilGaming for this command :)
// Alias BochilGaming

let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix }) =>  {
    let msgerror = "Terjadi kesalahan, silahkan coba lagi"
    try {
        let msgkurang = `Potion anda tidak cukup, silahkan beli melalui ${usedPrefix}shop untuk membeli potion atau minta ke orang yang banyak potionnya:v`
        let msgpenuh = `HP anda sudah penuh, ga percaya? Cek ${inventory}`
        let kucing = global.db.data.users[m.sender].kucing
        let usepotion = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '' || kucing == 6 ? 70 : '' || kucing == 7 ? 75 : '' || kucing == 8 ? 80 : '' || kucing == 9 ? 85 : '' || kucing == 10 ? 90 : '')
        if (/use|pakai/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                 let msgsucces = ("Berhasil menggunakan" + ' *' + (count * 1) + '* potion')
                 if (args[0] === 'potion') {
                    if (global.db.data.users[m.sender].healt < 100) {
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].potion -= count * 1
                            global.db.data.users[m.sender].healt += usepotion * count
                            conn.reply(m.chat, msgsucces, m)
                        } else conn.reply(m.chat, msgkurang, m)
                    } else conn.reply(m.chat, msgpenuh, m)
                } else if (args.length > 2 && args[0] === !'potion') m.reply("Hanya bisa menggunakan potion!" + '\nContoh penggunaan: *' + usedPrefix + 'potion 1*')
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
            }
        } else if (/heal/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                let msgsucces = ("Berhasil menggunakan" + ' *' + (count * 1) + '* Potion')
                if (global.db.data.users[m.sender].healt < 100) {
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].potion -= count * 1
                        global.db.data.users[m.sender].healt += usepotion * count
                        conn.reply(m.chat, msgsucces, m)
                    } else conn.reply(m.chat, msgkurang, m)
                } else conn.reply(m.chat, msgpenuh, m)
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
            }
        }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, msgerror, m)
    }
}

handler.help = ['use <item> <jumlah>', 'heal']
handler.tags = ['game']
handler.command = /^(use|heal)$/i
handler.maintenance = true

module.exports = handler
