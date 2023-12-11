import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, args }) => {
  let stiker = false
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''

  if (!/webp|image|video/g.test(mime)) return

  if (/webp|image|video/g.test(mime)) {
    let img = await q.download?.()
    stiker = await sticker(img)

    if (!stiker) {
      // Puedes agregar un mensaje de error aquí si el sticker no se genera correctamente
    }
  }

  if (stiker) {
    conn.sendFile(m.chat, stiker, 'sticker.webp', '', null, true, {
      contextInfo: {
        'forwardingScore': 200,
        'isForwarded': false
      }
    })
  } else {
    // Puedes manejar el caso en el que no se pueda generar el sticker aquí
  }
}

handler.command = /^(s(tickers?)?(image|video|gif|img)?)$/i
export default handler