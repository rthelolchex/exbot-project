let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
const defaultMenu = {
  before: `
╭───〔 %me 〕───
├────────────────────
╞═══〔 *USER INFO* 〕═══
├────────────────────
│ Name : %name
│ Limit tersisa : *%limit*
│ Mora : *%mora*
│ Primogems : *%primogems*
│ Potion : *%potion*
│ Role : *%role*
│ Level : *%level (%exp / %maxexp)*
│ %xp4levelup
│ Total XP : %totalexp XP
├────────────────────
╞═══〔 *BOT STATS* 〕═══
├────────────────────
│ Tanggal: *%week %weton, %date*
│ Tanggal Islam: *%dateIslamic*
│ Waktu: *%time*
│ Uptime: *%uptime (%muptime)*
│ Database: %rtotalreg of %totalreg
╰───〔 *Powered by %npmname* 〕───
%readmore`.trimStart(),
  header: `
╭────────────────────
╞═══〔 *%category Menu* 〕═══
├────────────────────`.trimStart(),
  body: '│ • %cmd %islimit %isPremium',
  footer: '╰────────────────────\n',
  after: `
*Copyright by @Nurutomo*
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  if (teks === 'all') tags = {
    'main': 'Main',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Sticker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Group',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'jadibot': 'Jadi Bot',
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced',
    'info': 'Info',
    'voicechanger': 'Pengubah suara',
    'maker': 'Maker',
    '': 'No Category',
  }
  if (teks === 'main') tags = {
    'main': 'Main',
  }
  if (teks === 'game') tags = {
    'game': 'Game',
  }
  if (teks === 'xp') tags = {
    'xp': 'Exp & Limit',
  }
  if (teks === 'sticker') tags = {
    'sticker': 'Sticker',
  }
  if (teks === 'kerang') tags = {
    'kerang': 'Kerang Ajaib',
  }
  if (teks === 'quotes') tags = {
    'quotes': 'Quotes',
  }
  if (teks === 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
  }
  if (teks === 'group') tags = {
    'group': 'Group',
  }
  if (teks === 'owner') tags = {
    'owner': 'Owner',
  }
  if (teks === 'premium') tags = {
    'premium': 'Premium',
  }
  if (teks === 'internet') tags = {
    'internet': 'Internet',
  }
  if (teks === 'anonymous') tags = {
    'anonymous': 'Anonymous Chat',
  }
  if (teks === 'nulis') tags = {
    'nulis': 'Magernulis & Logo',
  }
  if (teks === 'downloader') tags = {
    'downloader': 'Downloader',
  }
  if (teks === 'tools') tags = {
    'tools': 'Tools',
  }
  if (teks === 'fun') tags = {
    'fun': 'Fun',
  }
  if (teks === 'vote') tags = {
    'vote': 'vote',
  }
  if (teks === 'database') tags = {
    'database': 'Database',
  }
  if (teks === 'absen') tags = {
    'absen': 'Absen',
  }
  if (teks === 'quran') tags = {
    'quran': 'Al Qur\'an',
  }
  if (teks === 'jadibot') tags = {
    'jadibot': 'Jadi bot',
  }
  if (teks === 'host') tags = {
    'host': 'Host',
  }
  if (teks === 'info') tags = {
    'info': 'Info',
  }
  if (teks === 'voicechanger') tags = {
    'voicechanger': 'Pengubah suara',
  }
  if (teks === 'maker') tags = {
    'maker': "Maker",
  }
  if (teks === 'gi') tags = {
    'gi': "Genshin Impact"
  }
  if (!args[0]) {
    conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
      "listMessage": {
        "title": "Please click at down below.",
        "description": "Made with hand by rthelolchex",
        "buttonText": "Klik disini",
        "listType": "SINGLE_SELECT",
        "sections": [
          {
            "rows": [
              {
                "title": "Semua menu",
                "description": "",
                "rowId": `${_p}menu all`
              }, {
                "title": "Game Menu",
                "description": "",
                "rowId": `${_p}menu game`
              }, {
                "title": "Genshin Impact",
                "description": "",
                "rowId": `${_p}menu gi`
              }, {
                "title": "Exp & Limit Menu",
                "description": "",
                "rowId": `${_p}menu xp`
              }, {
                "title": "Sticker Menu",
                "description": "",
                "rowId": `${_p}menu sticker`
              }, {
                "title": "Kerang Ajaib Menu",
                "description": "",
                "rowId": `${_p}menu kerang`
              }, {
                "title": "Quotes Menu",
                "description": "",
                "rowId": `${_p}menu quotes`
              }, {
                "title": "Admin Menu",
                "description": "",
                "rowId": `${_p}menu admin`
              }, {
                "title": "Group Menu",
                "description": "",
                "rowId": `${_p}menu Group`
              }, {
                "title": "Premium Menu",
                "description": "",
                "rowId": `${_p}menu premium`
              }, {
                "title": "Internet Menu",
                "description": "",
                "rowId": `${_p}menu internet`
              }, {
                "title": "Anonymous Chat Menu",
                "description": "",
                "rowId": `${_p}menu anonymous`
              }, {
                "title": "Magernulis & Logo Menu",
                "description": "",
                "rowId": `${_p}menu nulis`
              }, {
                "title": "Downloader Menu",
                "description": "",
                "rowId": `${_p}menu downloader`
              }, {
                "title": "Tools Menu",
                "description": "",
                "rowId": `${_p}menu tools`
              }, {
                "title": "Fun Menu",
                "description": "",
                "rowId": `${_p}menu fun`
              }, {
                "title": "Database Menu",
                "description": "",
                "rowId": `${_p}menu xp`
              }, {
                "title": "Voting Menu",
                "description": "",
                "rowId": `${_p}menu vote`
              }, {
                "title": "Absen Menu",
                "description": "",
                "rowId": `${_p}menu absen`
              }, {
                "title": "Al Qur\'an Menu",
                "description": "",
                "rowId": `${_p}menu quran`
              }, {
                "title": "Jadi Bot Menu",
                "description": "",
                "rowId": `${_p}menu jadibot`
              }, {
                "title": "Owner Menu",
                "description": "",
                "rowId": `${_p}menu owner`
              }, {
                "title": "Host Menu",
                "description": "",
                "rowId": `${_p}menu host`
              }, {
                "title": "Advanced Menu",
                "description": "",
                "rowId": `${_p}menu advanced`
              }, {
                "title": "Info Menu",
                "description": "",
                "rowId": `${_p}menu info`
              }, {
                "title": "Pengubah Suara Menu",
                "description": "",
                "rowId": `${_p}menu voicechanger`
              }, {
                "title": "Maker Menu",
                "description": "",
                "rowId": `${_p}menu maker`
              },
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
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, mora, primogems, potion } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `| Siap untuk levelup\n| Ketik *${_p}levelup* untuk levelup` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, mora, primogems, potion,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch(fla + tags[teks])).buffer(), text.trim(), 'Made with hand by rthelolchex', 'Pemilik Bot', `${_p}owner`, 'Donasi', `${_p}donasi`, m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
