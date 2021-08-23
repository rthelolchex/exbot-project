let handler = async (m, { conn, args }) => {
  let group = m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) return m.reply('Hanya bisa dibuka di grup')
  let groupMetadata = await conn.groupMetadata(group)
  if (!groupMetadata) return m.reply('groupMetadata is undefined :\\')
  if (!'participants' in groupMetadata) return m.reply('participants is not defined :(')
  let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
  if (!me) return m.reply('Bot tidak ada didalam grup tersebut!')
  if (me.isAdmin !== true) return m.reply('Bot bukan admin, kutuk jadi admin dong bang')
  m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

