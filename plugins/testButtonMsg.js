async function handler(m, { conn, text }) {
    conn.sendButton(m.chat, "test", 'made with hand by rthelolchex', 'Ini buttonnya', '.apakah', { quoted: m })
}

handler.help = ['testbuttonmsg']
handler.tags = ['']
handler.command = /^testbuttonmsg$/i

handler.owner = true

module.exports = handler