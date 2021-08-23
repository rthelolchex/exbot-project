// NurNurz
let handler = async (m, { conn, text }) => {
   if (!text) return m.reply(`Masukan Text Untuk Bio Baru Bot`)
     try {
        await conn.setStatus(text)
        conn.reply(m.chat, 'Sukses Mengganti Bio Bot', m)
     } catch (e) {
       console.log(e)
       m.reply(`Error`)
     }
}
handler.help = ['setbotbio']
handler.tags = ['owner']
handler.command = /^(setbotbio)$/i
handler.owner = true

module.exports = handler
