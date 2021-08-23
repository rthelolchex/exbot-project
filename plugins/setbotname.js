// NurNurz
let handler = async (m, { conn, text }) => {
   if (!text) return m.reply(`Masukan Nama Baru Untuk Bot`)
     try {
        await conn.updateProfileName(text)
        conn.reply(m.chat, 'Sukses Mengganti Nama Bot', m)
     } catch (e) {
       console.log(e)
       m.reply(`Error`)
     }
}
handler.help = ['setbotname']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i
handler.owner = true

module.exports = handler
