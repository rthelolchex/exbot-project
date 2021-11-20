global.owner = ['6285161212950'] // Put your number here
global.mods = [] // Want some help?
global.prems = ["6285710780863", "6281347962643"] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  bg: 'http://bochil.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans', 
  'https://api.zeks.me': 'rthelolchex', 
  'https://pencarikode.xyz': 'pais', 
  'https ://leyscoders-api.herokuapp.com': 'dappakntlll' 
} 

// Messages 
global.msg = { 
  wait: "_Please wait a moment..._", 
  file: "_An error occurred, please try again._" 
} 
global .fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=' 

// Sticker WM 
global .packname = `It's a weem bang` 
global.author = `Ido | ExBot - Project V2`

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
