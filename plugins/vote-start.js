let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_Masih ada vote di chat ini!_\n\n*${usedPrefix}hapusvote* - untuk menghapus vote`
    }
    let str = `Vote dimulai!\nSilahkan klik button dibawah untuk mulai vote atau untuk menghapus vote.`
    conn.send3Button(m.chat, str, "Made with hand by rthelolchex", "Setuju", ".upvote", "Tidak setuju", ".devote", "Hapus vote", ".hapusvote")
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler