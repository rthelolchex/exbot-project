const free = 500
const prem = 5000
const freemoney = 1000
const premmoney = 10000
const freepotion = 1
const prempotion = 3
let handler = async (m, { isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return m.reply(`Anda sudah mengklaim klaim harian hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`)
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  global.db.data.users[m.sender].money += isPrems ? premmoney : freemoney
  global.db.data.users[m.sender].potion += isPrems ? prempotion : freepotion
  global.db.data.users[m.sender].primogems += 60
  m.reply(`+${isPrems ? prem : free} XP\n+${isPrems ? premmoney : freemoney} Money\n${isPrems ? prempotion : freepotion} Potion\n60 Primogems`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}