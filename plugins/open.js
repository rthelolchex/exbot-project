let handler = async(m, { conn, text, args, usedPrefix }) => {
    let errcmd = `${usedPrefix}open (chest name) ( 1 | 100 | 1000 )\n\nContoh penggunaan : *${usedPrefix}open common 10*\nList chest : \n- Common\n- Exquisite\n- Precious\n- Luxurious`
    let type = (args[0] || '').toLowerCase()
    let total = (args[1] || '').toLowerCase()
    let user = global.db.data.users[m.sender]
    switch (type) {
        case 'common':
            switch (total) {
            case '1':
                case 'chest':
                    let _cmora = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cexp = `${Math.floor(Math.random() * 20)}`.trim()
                    let _cpotion = `${Math.floor(Math.random() * 1)}`.trim()
                    let cprimogems = pickRandom(['0', '0', '2', '0', '0'])
                    let cm = (_cmora * 1)
                    let cxp = (_cexp * 1)
                    let cpot = (_cpotion * 1)
                    let cstr = `
Anda telah membuka common chest dan mendapatkan : 
${cm > 0 ? `Mora : ${cm}` : ''}
${cxp > 0 ? `EXP : ${cxp}` : ''}
${cpot > 0 ? `Potion : ${cpot}` : ''}
${cprimogems > 0 ? `Primogems : ${cprimogems}` : ''}
                    `.trim()
                    if (user.common >= 1) {
                        user.common -= 1
                        user.exp += cxp * 1
                        user.mora += cm * 1
                        user.primogems += cprimogems * 1
                        m.reply(cstr)
                    } else m.reply("Common chest anda tidak cukup!")
                    break
                }
            break
            default: 
            m.reply(errcmd)
                break
    }
}

handler.command = /^open$/i
handler.maintenance = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}