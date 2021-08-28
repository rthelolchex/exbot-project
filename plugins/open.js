let handler = async(m, { conn, text, args, usedPrefix }) => {
    let errcmd = `${usedPrefix}open (chest name) ( 1 | 10 | 100 )\n\nContoh penggunaan : *${usedPrefix}open common 10*\nList chest : \n- Common\n- Exquisite\n- Precious\n- Luxurious`
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
            case '10':
                    let _ccmora = `${Math.floor(Math.random() * 500)}`.trim()
                    let _ccexp = `${Math.floor(Math.random() * 200)}`.trim()
                    let _ccpotion = `${Math.floor(Math.random() * 10)}`.trim()
                    let ccprimogems = pickRandom([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
                    let ccm = (_ccmora * 1)
                    let ccxp = (_ccexp * 1)
                    let ccpot = (_ccpotion * 1)
                    let ccstr = `
Anda telah membuka common chest dan mendapatkan : 
${ccm > 0 ? `Mora : ${ccm}` : ''}
${ccxp > 0 ? `EXP : ${ccxp}` : ''}
${ccpot > 0 ? `Potion : ${ccpot}` : ''}
${ccprimogems > 0 ? `Primogems : ${ccprimogems}` : ''}
                    `.trim()
                    if (user.common >= 10) {
                        user.common -= 10
                        user.potion += ccpot * 1
                        user.exp += ccxp * 1
                        user.mora += ccm * 1
                        user.primogems += ccprimogems * 1
                        m.reply(ccstr)
                    } else m.reply("Common chest anda tidak cukup!")
                    break
                case '100':
                    let _cccmora = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _cccexp = `${Math.floor(Math.random() * 2000)}`.trim()
                    let _cccpotion = `${Math.floor(Math.random() * 100)}`.trim()
                    let cccprimogems = pickRandom([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100])
                    let cccm = (_cccmora * 1)
                    let cccxp = (_cccexp * 1)
                    let cccpot = (_cccpotion * 1)
                    let cccstr = `
Anda telah membuka common chest dan mendapatkan : 
${cccm > 0 ? `Mora : ${cccm}` : ''}
${cccxp > 0 ? `EXP : ${cccxp}` : ''}
${cccpot > 0 ? `Potion : ${cccpot}` : ''}
${cccprimogems > 0 ? `Primogems : ${cccprimogems}` : ''}
                    `.trim()
                    if (user.common >= 100) {
                        user.common -= 100
                        user.potion += cccpot * 1
                        user.exp += cccxp * 1
                        user.mora += cccm * 1
                        user.primogems += cccprimogems * 1
                        m.reply(cccstr)
                    } else m.reply("Common chest anda tidak cukup!")
                    break
                }
            break
            case 'exquisite':
                switch (total) {
                    case '1':
                case 'chest':
                    let _emora = `${Math.floor(Math.random() * 100)}`.trim()
                    let _exp = `${Math.floor(Math.random() * 1000)}`.trim()
                    let _epotion = `${Math.floor(Math.random() * 10)}`.trim()
                    let eprimogems = 5
                    let em = (_emora * 1)
                    let exp = (_exp * 1)
                    let epot = (_epotion * 1)
                    let estr = `
Anda telah membuka exquisite chest dan mendapatkan : 
${em > 0 ? `Mora : ${em}` : ''}
${exp > 0 ? `EXP : ${exp}` : ''}
${epot > 0 ? `Potion : ${epot}` : ''}
${eprimogems > 0 ? `Primogems : ${eprimogems}` : ''}
                    `.trim()
                    if (user.exquisite >= 1) {
                        user.exquisite -= 1
                        user.potion += epot * 1
                        user.exp += exp * 1
                        user.mora += em * 1
                        user.primogems += eprimogems * 1
                        m.reply(estr)
                    } else m.reply("Exquisite chest anda tidak cukup!")
                    break
            case '10':
                    let _eemora = `${Math.floor(Math.random() * 1000)}`.trim()
                    let _eeexp = `${Math.floor(Math.random() * 10000)}`.trim()
                    let _eepotion = `${Math.floor(Math.random() * 100)}`.trim()
                    let eeprimogems = 50
                    let eem = (_eemora * 1)
                    let eeexp = (_eeexp * 1)
                    let eepot = (_eepotion * 1)
                    let eestr = `
Anda telah membuka exquisite chest dan mendapatkan : 
${eem > 0 ? `Mora : ${eem}` : ''}
${eeexp > 0 ? `EXP : ${eeexp}` : ''}
${eepot > 0 ? `Potion : ${eepot}` : ''}
${eeprimogems > 0 ? `Primogems : ${eeprimogems}` : ''}
                    `.trim()
                    if (user.exquisite >= 10) {
                        user.exquisite -= 10
                        user.potion += eepot * 1
                        user.exp += eeexp * 1
                        user.mora += eem * 1
                        user.primogems += eeprimogems * 1
                        m.reply(eestr)
                    } else m.reply("Exquisite chest anda tidak cukup!")
                    break
                case '100':
                    let _eeemora = `${Math.floor(Math.random() * 10000)}`.trim()
                    let _eeeexp = `${Math.floor(Math.random() * 100000)}`.trim()
                    let _eeepotion = `${Math.floor(Math.random() * 1000)}`.trim()
                    let eeeprimogems = 500
                    let eeem = (_eeemora * 1)
                    let eeeexp = (_eeeexp * 1)
                    let eeepot = (_eeepotion * 1)
                    let eeestr = `
Anda telah membuka common chest dan mendapatkan : 
${eeem > 0 ? `Mora : ${eeem}` : ''}
${eeeexp > 0 ? `EXP : ${eeeexp}` : ''}
${eeepot > 0 ? `Potion : ${eeepot}` : ''}
${eeeprimogems > 0 ? `Primogems : ${eeeprimogems}` : ''}
                    `.trim()
                    if (user.exquisite >= 100) {
                        user.exquisite -= 100
                        user.eeepot * 1
                        user.exp += eeeexp * 1
                        user.mora += eeem * 1
                        user.primogems += eeeprimogems * 1
                        m.reply(eeestr)
                    } else m.reply("Exquisite chest anda tidak cukup!")
                    break
                }
                break
            case 'precious':
                switch (total) {
                    case 'chest':
                    case '1':
                        let _pmora = `${Math.floor(Math.random() * 150)}`.trim()
                        let _pxp = `${Math.floor(Math.random() * 1500)}`.trim()
                        let _ppotion = `${Math.floor(Math.random() * 15)}`.trim()
                        let pprimogems = 10
                        let pm = (_pmora * 1)
                        let pxp = (_pxp * 1)
                        let ppotion = (_ppotion * 1)
                        let pstr = `
Anda telah membuka precious chest dan mendapatkan : 
${pm > 0 ? `Mora : ${pm}` : ''}
${pxp > 0 ? `EXP : ${pxp}` : ''}
${ppotion > 0 ? `Potion : ${ppotion}` : ''}
${pprimogems > 0 ? `Primogems : ${pprimogems}` : ''}
                        `.trim()
                        if (user.precious >= 1) {
                            user.precious -= 1
                            user.potion += ppotion * 1
                            user.exp += pxp * 1
                            user.mora += pm * 1
                            user.primogems += pprimogems * 1
                            m.reply(pstr)
                        } else m.reply("Precious chest anda tidak cukup!")
                        break
                    case '10':
                        let _ppmora = `${Math.floor(Math.random() * 1500)}`.trim()
                        let _ppxp = `${Math.floor(Math.random() * 15000)}`.trim()
                        let _pppotion = `${Math.floor(Math.random() * 150)}`.trim()
                        let ppprimogems = 100
                        let ppm = (_ppmora * 1)
                        let ppxp = (_ppxp * 1)
                        let pppotion = (_pppotion * 1)
                        let ppstr = `
Anda telah membuka precious chest dan mendapatkan : 
${ppm > 0 ? `Mora : ${ppm}` : ''}
${ppxp > 0 ? `EXP : ${ppxp}` : ''}
${pppotion > 0 ? `Potion : ${pppotion}` : ''}
${ppprimogems > 0 ? `Primogems : ${ppprimogems}` : ''}
                        `.trim()
                        if (user.precious >= 10) {
                            user.precious -= 10
                            user.potion += pppotion * 1
                            user.exp += ppxp * 1
                            user.mora += ppm * 1
                            user.primogems += ppprimogems * 1
                            m.reply(ppstr)
                        } else m.reply("Precious chest anda tidak cukup!")
                        break
                    case '100':
                        let _pppmora = `${Math.floor(Math.random() * 15000)}`.trim()
                        let _pppxp = `${Math.floor(Math.random() * 150000)}`.trim()
                        let _ppppotion = `${Math.floor(Math.random() * 1500)}`.trim()
                        let pppprimogems = 1000
                        let pppm = (_pppmora * 1)
                        let pppxp = (_pppxp * 1)
                        let ppppotion = (_ppppotion * 1)
                        let pppstr = `
Anda telah membuka precious chest dan mendapatkan : 
${pppm > 0 ? `Mora : ${pppm}` : ''}
${pppxp > 0 ? `EXP : ${pppxp}` : ''}
${ppppotion > 0 ? `Potion : ${ppppotion}` : ''}
${pppprimogems > 0 ? `Primogems : ${pppprimogems}` : ''}
                        `.trim()
                        if (user.precious >= 100) {
                            user.precious -= 100
                            user.potion += ppppotion * 1
                            user.exp += pppxp * 1
                            user.mora += pppm * 1
                            user.primogems += pppprimogems * 1
                            m.reply(pppstr)
                        } else m.reply("Precious chest anda tidak cukup!")
                        break
                }
                break
            case 'luxurious':
                switch (total) {
                    case 'chest':
                    case '1':
                    let _lmora = `${Math.floor(Math.random() * 200)}`.trim()
                    let _lxp = `${Math.floor(Math.random() * 2000)}`.trim()
                    let _lpotion = `${Math.floor(Math.random() * 20)}`.trim()
                    let lprimogems = 20
                    let lm = (_lmora * 1)
                    let lxp = (_lxp * 1)
                    let lpot = (_lpotion * 1)
                    let lstr = `
Anda telah membuka exquisite chest dan mendapatkan : 
${lm > 0 ? `Mora : ${lm}` : ''}
${lxp > 0 ? `EXP : ${lxp}` : ''}
${lpot > 0 ? `Potion : ${lpot}` : ''}
${lprimogems > 0 ? `Primogems : ${lprimogems}` : ''}
                    `.trim()
                    if (user.luxurious >= 1) {
                        user.luxurious -= 1
                        user.potion += lpot * 1
                        user.exp += lxp * 1
                        user.mora += lm * 1
                        user.primogems += lprimogems * 1
                        m.reply(lstr)
                    } else m.reply("Luxurious chest anda tidak cukup!")
                        break
                    case '10':
                    let _llmora = `${Math.floor(Math.random() * 2000)}`.trim()
                    let _llxp = `${Math.floor(Math.random() * 20000)}`.trim()
                    let _llpotion = `${Math.floor(Math.random() * 200)}`.trim()
                    let llprimogems = 200
                    let llm = (_llmora * 1)
                    let llxp = (_llxp * 1)
                    let llpot = (_llpotion * 1)
                    let llstr = `
Anda telah membuka exquisite chest dan mendapatkan : 
${llm > 0 ? `Mora : ${llm}` : ''}
${llxp > 0 ? `EXP : ${llxp}` : ''}
${llpot > 0 ? `Potion : ${llpot}` : ''}
${llprimogems > 0 ? `Primogems : ${llprimogems}` : ''}
                    `.trim()
                    if (user.luxurious >= 10) {
                        user.luxurious -= 10
                        user.potion += llpot * 1
                        user.exp += llxp * 1
                        user.mora += llm * 1
                        user.primogems += llprimogems * 1
                        m.reply(llstr)
                    } else m.reply("Luxurious chest anda tidak cukup!")
                        break
                    case '100':
                    let _lllmora = `${Math.floor(Math.random() * 20000)}`.trim()
                    let _lllxp = `${Math.floor(Math.random() * 200000)}`.trim()
                    let _lllpotion = `${Math.floor(Math.random() * 2000)}`.trim()
                    let lllprimogems = 2000
                    let lllm = (_lllmora * 1)
                    let lllxp = (_lllxp * 1)
                    let lllpot = (_lllpotion * 1)
                    let lllstr = `
Anda telah membuka exquisite chest dan mendapatkan : 
${lllm > 0 ? `Mora : ${lllm}` : ''}
${lllxp > 0 ? `EXP : ${lllxp}` : ''}
${lllpot > 0 ? `Potion : ${lllpot}` : ''}
${lllprimogems > 0 ? `Primogems : ${lllprimogems}` : ''}
                    `.trim()
                    if (user.luxurious >= 10) {
                        user.luxurious -= 10
                        user.potion += lllpot * 1
                        user.exp += lllxp * 1
                        user.mora += lllm * 1
                        user.primogems += lllprimogems * 1
                        m.reply(lllstr)
                    } else m.reply("Luxurious chest anda tidak cukup!")
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