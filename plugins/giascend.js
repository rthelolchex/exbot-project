const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { text, args }) => {
    if (!args[0]) {
        conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
            "listMessage": {
                "title": "Silahkan klik dibawah untuk list character",
                "description": "Made with hand by rthelolchex",
                "buttonText": "Klik disini",
                "listType": "SINGLE_SELECT",
                "sections": [
                    {
                        "rows": [
                            {
                                "title": "Albedo",
                                "description": "",
                                "rowId": `.giascend Albedo`,
                            }, {
                                "title": "Aloy",
                                "description": "",
                                "rowId": `.giascend Aloy`,
                            }, {
                                "title": "Amber",
                                "description": "",
                                "rowId": `.giascend Amber`,
                            }, {
                                "title": "Ayaka (Kamisato Ayaka)",
                                "description": "",
                                "rowId": `.giascend Ayaka`,
                            }, {
                                "title": "Baal (Raiden Shogun)",
                                "description": "",
                                "rowId": `.giascend Baal`,
                            }, {
                                "title": "Barbara",
                                "description": "",
                                "rowId": `.giascend Barbara`,
                            }, {
                                "title": "Beidou",
                                "description": "",
                                "rowId": `.giascend Beidou`,
                            }, {
                                "title": "Bennett",
                                "description": "",
                                "rowId": `.giascend Bennett`,
                            }, {
                                "title": "Childe (Tartaglia)",
                                "description": "",
                                "rowId": `.giascend Childe`,
                            }, {
                                "title": "Chongyun",
                                "description": "",
                                "rowId": `.giascend Chongyun`,
                            }, {
                                "title": "Diluc",
                                "description": "",
                                "rowId": `.giascend Diluc`,
                            }, {
                                "title": "Diona",
                                "description": "",
                                "rowId": `.giascend Diona`,
                            }, {
                                "title": "Eula",
                                "description": "",
                                "rowId": `.giascend Eula`,
                            }, {
                                "title": "Fischl",
                                "description": "",
                                "rowId": `.giascend Fischl`,
                            }, {
                                "title": "Ganyu",
                                "description": "",
                                "rowId": `.giascend Ganyu`,
                            }, {
                                "title": "Hu Tao",
                                "description": "",
                                "rowId": `.giascend Hutao`,
                            }, {
                                "title": "Jean",
                                "description": "",
                                "rowId": `.giascend Jean`,
                            }, {
                                "title": "Kaeya",
                                "description": "",
                                "rowId": `.giascend Kaeya`,
                            }, {
                                "title": "Kazuha (Kaedehara Kazuha)",
                                "description": "",
                                "rowId": `.giascend Kazuha`,
                            }, {
                                "title": "Keqing",
                                "description": "",
                                "rowId": `.giascend Keqing`,
                            }, {
                                "title": "Klee",
                                "description": "",
                                "rowId": `.giascend Klee`,
                            }, {
                                "title": "Kokomi",
                                "description": "",
                                "rowId": `.giascend Kokomi`,
                            }, {
                                "title": "Lisa",
                                "description": "",
                                "rowId": `.giascend Lisa`,
                            }, {
                                "title": "Mona",
                                "description": "",
                                "rowId": `.giascend Mona`,
                            }, {
                                "title": "Ningguang",
                                "description": "",
                                "rowId": `.giascend Ningguang`,
                            }, {
                                "title": "Noelle",
                                "description": "",
                                "rowId": `.giascend Noelle`,
                            }, {
                                "title": "Qiqi",
                                "description": "",
                                "rowId": `.giascend Qiqi`,
                            }, {
                                "title": "Razor",
                                "description": "",
                                "rowId": `.giascend Razor`,
                            }, {
                                "title": "Rosaria",
                                "description": "",
                                "rowId": `.giascend Rosaria`,
                            }, {
                                "title": "Sara (Kujou Sara)",
                                "description": "",
                                "rowId": `.giascend Sara`,
                            }, {
                                "title": "Sayu",
                                "description": "",
                                "rowId": `.giascend Sayu`,
                            }, {
                                "title": "Sucrose",
                                "description": "",
                                "rowId": `.giascend Sucrose`,
                            }, {
                                "title": "Venti",
                                "description": "",
                                "rowId": `.giascend Venti`,
                            }, {
                                "title": "Xiangling",
                                "description": "",
                                "rowId": `.giascend Xiangling`,
                            }, {
                                "title": "Traveler",
                                "description": "",
                                "rowId": `.giascend mc`,
                            }, {
                                "title": "Xiao",
                                "description": "",
                                "rowId": `.giascend Xiao`,
                            }, {
                                "title": "Xingqiu",
                                "description": "",
                                "rowId": `.giascend Xingqiu`,
                            }, {
                                "title": "Xinyan",
                                "description": "",
                                "rowId": `.giascend Xinyan`,
                            }, {
                                "title": "Yoimiya",
                                "description": "",
                                "rowId": `.giascend Yoimiya`,
                            }, {
                                "title": "Zhongli",
                                "description": "",
                                "rowId": `.giascend Zhongli`,
                            }
                        ]
                    }
                ], "contextInfo": {
                    "stanzaId": m.key.id,
                    "participant": m.sender,
                    "quotedMessage": m.message
                }
            }
        }, {}), { waitForAck: true })
        throw 0
    }
    if (text === 'Amber') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/amber.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Albedo') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/albedo.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Aloy') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/aloy.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Ayaka') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/ayaka.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Baal') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/baal.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Barbara') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/barbara.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Beidou') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/beidou.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Bennett') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/Bennett.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Childe') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/childe.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Chongyun') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/chongyun.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Diluc') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/diluc.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Diona') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/diona.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Eula') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/eula.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Fischl') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/fischl.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Ganyu') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/ganyu.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Hutao') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/hutao.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Jean') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/jean.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Kaeya') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/kaeya.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Kazuha') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/kazuha.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Keqing') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/keqing.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Klee') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/klee.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Kokomi') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/kokomi.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Lisa') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/lisa.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Traveler') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/mc.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Mona') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/mona.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Ningguang') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/ningguang.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Noelle') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/noelle.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Qiqi') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/qiqi.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Razor') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/razor.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Rosaria') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/rosaria.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Sara') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/sara.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Sayu') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/sayu.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Sucrose') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/sucrose.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Venti') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/venti.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Xiangling') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/xiangling.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Xiao') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/xiao.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Xingqiu') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/xingqiu.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Xinyan') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/xinyan.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Yanfei') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/yanfei.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Yoimiya') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/yoimiya.jpg'), MessageType.image, { quoted: m })
    }
    if (text === 'Zhongli') {
        m.reply("_Silahkan tunggu sebentar, mengambil image..._")
        conn.sendMessage(m.chat, fs.readFileSync('./gi/ascends/zhongli.jpg'), MessageType.image, { quoted: m })
    }
}

handler.help = ['giascend']
handler.tags = ['gi']

handler.command = /^(giascend)$/i

module.exports = handler