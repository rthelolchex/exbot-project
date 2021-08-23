let handler = async m => m.reply(`
╭────────────────────
╞═══ 《 *Donasi • Pulsa* 》 ═══
├────────────────────
│ • Telkomsel (by.u) [085161212950]
╰────────────────────

╭────────────────────
╞═══ 《 *Donasi • Non-Pulsa* 》 ═══
├────────────────────
│ • GOPAY (Gojek) [085157129500]
╰────────────────────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
