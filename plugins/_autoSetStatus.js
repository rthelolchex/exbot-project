const fs = require('fs')
let handler = m => m

handler.all = async function (m) {
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    let setting = global.db.data.settings

    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`Aktif selama ${uptime} | Mode : ${global.opts['self'] ? 'Private' : 'Public'} | ExBot - Project by rthelolchex`).catch(_ => _)
        conn.logger.info("Bio has been updated!")
        setting.status = new Date() * 1
    }
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

module.exports = handler