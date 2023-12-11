import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu =`
─────🔍🔍🔍─────
${lenguajeGB.smsMenuTotal3()}

🔍${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐠𝐨𝐨𝐠𝐥𝐞 *𝐭𝐞𝐱𝐭𝐨*' : '𝐠𝐨𝐨𝐠𝐥𝐞𝐟 *𝐭𝐞𝐱𝐭*'}_
🔍${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐛𝐨𝐭 *𝐭𝐞𝐱𝐭𝐨*' : '𝐬𝐢𝐦𝐬𝐢𝐦𝐢 *𝐭𝐞𝐱𝐭*'}_
🔍${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐢𝐚 *𝐭𝐞𝐱𝐭𝐨*' : '𝐜𝐡𝐚𝐭𝐠𝐩𝐭 *𝐭𝐞𝐱𝐭*'}_
🔍${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐲𝐭𝐬 *𝐭𝐞𝐱𝐭𝐨*' : '𝐲𝐭𝐬 *𝐭𝐞𝐱𝐭*'}_
─────🔍🔍🔍─────

${lenguajeGB.smsMenuTotal4()} 
┊
🖼️ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐢𝐦𝐚𝐠𝐞𝐧 *𝐭𝐞𝐱𝐭𝐨*' : '𝐠𝐢𝐦𝐚𝐠𝐞 *𝐭𝐞𝐱𝐭*'}
📘 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 *𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤𝐝𝐥 *𝐥𝐢𝐧𝐤*'}
📁 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 *𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞𝐝𝐥 *𝐥𝐢𝐧𝐤*'}
🎵 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐩𝐥𝐚𝐲 *𝐧𝐨𝐦𝐛𝐫𝐞 𝐨 𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐩𝐥𝐚𝐲 *𝐧𝐚𝐦𝐞*'}
🎥 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐲𝐭𝐚 *𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐲𝐭𝐚 *𝐥𝐢𝐧𝐤*'}
🎬 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐲𝐭𝐯 *𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐲𝐭𝐯 *𝐥𝐢𝐧𝐤*'}
🎥 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐲𝐭𝐦𝐚𝐱 *𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐲𝐭𝐦𝐚𝐱 *𝐥𝐢𝐧𝐤*'}
📄 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐲𝐭𝐚𝐝𝐨𝐜 *𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐲𝐭𝐚𝐝𝐨𝐜 *𝐥𝐢𝐧𝐤*'}
📄 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐲𝐭𝐯𝐝𝐨𝐜 *𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐲𝐭𝐯𝐝𝐨𝐜 *𝐥𝐢𝐧𝐤*'}
📄 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐲𝐭𝐦𝐚𝐱𝐝𝐨𝐜 *𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐲𝐭𝐦𝐚𝐱𝐝𝐨𝐜 *𝐥𝐢𝐧𝐤*'}
📺 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐭𝐢𝐤𝐭𝐨𝐤 *𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐭𝐤𝐝𝐥 *𝐥𝐢𝐧𝐤*'}
🖼️ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐨𝐩𝐞𝐧𝐢𝐚𝐦𝐚𝐠𝐞 *𝐭𝐞𝐱𝐭𝐨*' : '𝐝𝐚𝐥𝐥𝐞 *𝐭𝐞𝐱𝐭*'}
🌄 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐦𝐢𝐝𝐣𝐨𝐮𝐫𝐧𝐞𝐲 *𝐭𝐞𝐱𝐭𝐨*' : '𝐨𝐩𝐞𝐧𝐣𝐨𝐮𝐫𝐧𝐞𝐲 *𝐭𝐞𝐱𝐭*'}
🎵 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐬𝐩𝐨𝐭𝐢𝐟𝐲 *𝐭𝐞𝐱𝐭𝐨 𝐨 𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐬𝐩𝐨𝐭𝐢𝐟𝐲 *𝐭𝐞𝐱𝐭 𝐨𝐫 𝐥𝐢𝐧𝐤*'}
🔎 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐬𝐩𝐨𝐭𝐢𝐟𝐲𝐬𝐞𝐚𝐫𝐜𝐡 *𝐭𝐞𝐱𝐭𝐨*' : '𝐬𝐩𝐨𝐭𝐢𝐟𝐲𝐬𝐞𝐚𝐫𝐜𝐡 *𝐭𝐞𝐱𝐭*'}
📸 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐢𝐧𝐬@𝐮𝐬𝐞𝐫𝐫𝐚𝐦 *𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐢𝐧𝐬@𝐮𝐬𝐞𝐫𝐫𝐚𝐦 *𝐥𝐢𝐧𝐤*'}
 
─────🔁🔁🔁─────

${lenguajeGB.smsMenuTotal5()} 
┊
🖼️ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐢𝐦𝐠 *𝐬𝐭𝐢𝐜𝐤𝐞𝐫*' : '𝐭𝐨𝐢𝐦𝐠 *𝐬𝐭𝐢𝐜𝐤𝐞𝐫*'}
🔗 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐮𝐫𝐥 *𝐢𝐦𝐚𝐠𝐞𝐧*' : '𝐭𝐨𝐮𝐫𝐥 *𝐢𝐦𝐚𝐠𝐞*'}
🎥 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐦𝐩𝟒 *𝐬𝐭𝐢𝐜𝐤𝐞𝐫*' : '𝐭𝐨𝐯𝐢𝐝𝐞𝐨 *𝐬𝐭𝐢𝐜𝐤𝐞𝐫*'}
🎞️ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐠𝐢𝐟 *𝐯𝐢𝐝𝐞𝐨*' : '𝐭𝐨𝐠𝐢𝐟 *𝐯𝐢𝐝𝐞𝐨*'}
🎵 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐦𝐩𝟑 *𝐯𝐢𝐝𝐞𝐨 𝐨 𝐚𝐮𝐝𝐢𝐨*' : '𝐭𝐨𝐯𝐧 *𝐯𝐢𝐝𝐞𝐨 𝐨𝐫 𝐚𝐮𝐝𝐢𝐨*'}
🔊 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐭𝐭𝐬 *𝐭𝐞𝐱𝐭𝐨*' : '𝐭𝐨𝐭𝐭𝐬 *𝐭𝐞𝐱𝐭*'}

─────👮👮👮─────

${lenguajeGB.smsMenuTotal6()} 
┊
🔍 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐢𝐧𝐟𝐨𝐠𝐫𝐮𝐩𝐨' : '𝐠𝐫𝐨𝐮𝐩𝐢𝐧𝐟𝐨'}
👥 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐚𝐝𝐦𝐢𝐧𝐬' : '𝐝𝐦𝐢𝐧𝐬'}
🔗 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐞𝐧𝐥𝐚𝐜𝐞' : '𝐥𝐢𝐧𝐤𝐠𝐫𝐨𝐮𝐩'}
🔗 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐢𝐧𝐬𝐩𝐞𝐜𝐜𝐢𝐨𝐧𝐚𝐫 *𝐞𝐧𝐥𝐚𝐜𝐞*' : '𝐢𝐧𝐬𝐩𝐞𝐜𝐭 *𝐥𝐢𝐧𝐤*'}
 
─────👮👮👮─────

${lenguajeGB.smsMenuTotal7()} 
┊
📢 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐧𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐫 *𝐭𝐞𝐱𝐭𝐨*' : '𝐡𝐢𝐝𝐞@𝐮𝐬𝐞𝐫 *𝐭𝐞𝐱𝐭*'}
👞 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐬𝐚𝐜𝐚𝐫 *@𝐮𝐬𝐞𝐫*' : '𝐤𝐢𝐜𝐤 *@𝐮𝐬𝐞𝐫*'}
📞 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐢𝐧𝐯𝐢𝐭𝐚𝐫 *𝐧𝐮́𝐦𝐞𝐫𝐨*' : '𝐢𝐧𝐯𝐢𝐭𝐞 *𝐧𝐮𝐦𝐛𝐞𝐫*'}
👑 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐝𝐚𝐫𝐚𝐝𝐦𝐢𝐧 *@𝐮𝐬𝐞𝐫*' : '𝐩𝐫𝐨𝐦𝐨𝐭𝐞 *@𝐮𝐬𝐞𝐫*'}
👑 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐪𝐮𝐢𝐭𝐚𝐫𝐝𝐦𝐢𝐧 *@𝐮𝐬𝐞𝐫*' : '𝐝𝐞𝐦𝐨𝐭𝐞 *@𝐮𝐬𝐞𝐫*'}
🚫 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐩𝐫𝐨𝐡𝐢𝐛𝐢𝐫 *@𝐮𝐬𝐞𝐫*' : '𝐝𝐞𝐩𝐫𝐢𝐯𝐞 *@𝐮𝐬𝐞𝐫*'}
🚫 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐝𝐞𝐬𝐩𝐫𝐨𝐡𝐢𝐛𝐢𝐫 *@𝐮𝐬𝐞𝐫*' : '𝐮𝐧𝐝𝐞𝐩𝐫𝐢𝐯𝐞 *@𝐮𝐬𝐞𝐫*'}
📜 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐞𝐝𝐢𝐭𝐚𝐫𝐰𝐞𝐥𝐜𝐨𝐦𝐞 *𝐭𝐞𝐱𝐭𝐨*' : '𝐬𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞'}
📜 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐞𝐝𝐢𝐭𝐚𝐫𝐛𝐲𝐞 *𝐭𝐞𝐱𝐭𝐨*' : '𝐬𝐞𝐭𝐛𝐲𝐞'}
📜 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐜𝐚𝐦𝐛𝐢𝐚𝐫𝐝𝐞𝐬𝐜 *𝐭𝐞𝐱𝐭𝐨*' : '𝐜𝐨𝐦𝐛𝐲𝐞𝐬𝐜 *𝐭𝐞𝐱𝐭*'}
📞 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '@𝐮𝐬𝐞𝐫𝐚𝐥𝐥 *𝐭𝐞𝐱𝐭𝐨*' : '@𝐮𝐬𝐞𝐫𝐚𝐥𝐥 *𝐭𝐞𝐱𝐭*'}

─────🔧🔧🔧─────

  ${lenguajeGB.smsMenuTotal6()}

📋 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐈𝐧𝐟𝐨𝐠𝐫𝐚𝐜𝐢ó𝐧' : '𝐈𝐧𝐟𝐨𝐠𝐫𝐚𝐩𝐡𝐢𝐜'}
📊 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐜𝐢ó𝐧' : '𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐜𝐭'}
🌐 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐄𝐧𝐥𝐚𝐜𝐞' : '𝐄𝐧𝐥𝐚𝐜𝐞'}
🔍 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐈𝐧𝐬𝐩𝐞𝐜𝐜𝐢ó𝐧𝐚𝐫 *𝐄𝐧𝐥𝐚𝐜𝐞*' : '𝐈𝐧𝐬𝐩𝐞𝐜𝐭 *𝐄𝐧𝐥𝐚𝐜𝐞*'}

─────📢📢📢─────
🔍 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐍𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐫 *𝐭𝐞𝐱𝐭𝐨*' : '𝐍𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐫 *𝐓𝐞𝐱𝐭*'}
📷 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐒𝐚𝐜𝐚𝐫 *@𝐮𝐬𝐞𝐫*' : '𝐒𝐚𝐜𝐚𝐫 *𝐓𝐚𝐠*'}
🔊 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐈𝐧𝐯𝐢𝐭𝐚𝐫 *𝐍ú𝐦𝐞𝐫𝐨*' : '𝐈𝐧𝐯𝐢𝐭𝐞 *𝐍𝐮𝐦𝐛𝐞𝐫*'}
🎥 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐏𝐫𝐨𝐦𝐨𝐯𝐞𝐫 *@𝐮𝐬𝐞𝐫*' : '𝐏𝐫𝐨𝐦𝐨𝐯𝐞𝐫 *𝐓𝐚𝐠*'}
❓ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐐𝐮𝐢𝐭𝐚𝐫𝐚𝐝𝐦𝐢𝐧 *@𝐮𝐬𝐞𝐫*' : '𝐃𝐞𝐦𝐨𝐭𝐞 *𝐓𝐚𝐠*'}
❗ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐃𝐚𝐫𝐚𝐝𝐦𝐢𝐧 *@𝐮𝐬𝐞𝐫*' : '𝐔𝐧𝐝𝐞𝐩𝐫𝐢𝐯𝐞 *𝐓𝐚𝐠*'}
🖍️ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐄𝐝𝐢𝐭𝐚𝐫𝐰𝐞𝐥𝐜𝐨𝐦𝐞 *𝐭𝐞𝐱𝐭𝐨*' : '𝐒𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞 *𝐓𝐞𝐱𝐭*'}
🎨 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐄𝐝𝐢𝐭𝐚𝐫𝐛𝐲𝐞 *𝐭𝐞𝐱𝐭𝐨*' : '𝐒𝐞𝐭𝐛𝐲𝐞 *𝐓𝐞𝐱𝐭*'}
🖼️ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐂𝐚𝐦𝐛𝐢𝐚𝐫𝐝𝐛𝐲𝐞 *𝐭𝐞𝐱𝐭𝐨*' : '𝐂𝐚𝐦𝐛𝐢𝐚𝐫𝐝𝐛𝐲𝐞 *𝐓𝐞𝐱𝐭*'}
📸 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐂𝐚𝐦𝐛𝐢𝐚𝐫𝐧𝐨𝐦𝐛𝐫𝐞 *𝐭𝐞𝐱𝐭𝐨*' : '𝐂𝐚𝐦𝐛𝐢𝐚𝐫𝐧𝐨𝐦𝐛𝐫𝐞 *𝐓𝐞𝐱𝐭*'}
📚 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐓𝐰𝐢𝐭𝐭𝐞𝐫 *𝐭𝐞𝐱𝐭𝐨*' : '𝐓𝐰𝐢𝐭𝐭𝐞𝐫 *𝐓𝐞𝐱𝐭*'}

─────🔧🔧🔧─────

${lenguajeGB.smsMenuTotal10()} 

✅ on
❌ off

─────🔧🔧🔧─────

${lenguajeGB.smsMenuTotal11()} 

📝 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐯𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐫 𝐧𝐨𝐦𝐛𝐫𝐞.𝐚𝐠𝐞' : '𝐯𝐞𝐫𝐢𝐟𝐲 𝐧𝐚𝐦𝐞.𝐚𝐠𝐞'}
📝 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐚𝐧𝐮𝐥𝐚𝐫𝐞𝐠 𝐢𝐝 𝐝𝐞 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐨' : '𝐮𝐧𝐫𝐞𝐠 𝐢𝐝 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐢𝐨𝐧'}
🆔 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐢𝐝𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐨' : '𝐢𝐝𝐫𝐞𝐠𝐢𝐬𝐭𝐞𝐫'}

─────✔️✔️✔️─────

${lenguajeGB.smsMenuTotal12()} 

💾 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐫𝐞𝐬𝐩𝐚𝐥𝐝𝐨' : '𝐛𝐚𝐜𝐤𝐮𝐩'}
🚫 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐛𝐚𝐧𝐮𝐬𝐮𝐚𝐫𝐢𝐨 @𝐮𝐬𝐞𝐫' : '𝐛𝐚𝐧𝐮𝐬𝐞𝐫 @@𝐮𝐬𝐞𝐫'}
✅ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐝𝐞𝐬𝐛𝐚𝐧𝐮𝐬𝐮𝐚𝐫𝐢𝐨 @𝐮𝐬𝐞𝐫' : '𝐮𝐧𝐛𝐚𝐧𝐬𝐞𝐫 @@𝐮𝐬𝐞𝐫'}
👑 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐭𝐞𝐧𝐞𝐫𝐩𝐨𝐝𝐞𝐫' : '𝐚𝐮𝐭𝐨𝐚𝐝𝐦𝐢𝐧'}
💬 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐧𝐮𝐞𝐯𝐚𝐛𝐢𝐨𝐛𝐨𝐭 𝐭𝐞𝐱𝐭𝐨' : '𝐬𝐞𝐭𝐛𝐢𝐨𝐛𝐨𝐭 𝐭𝐞𝐱𝐭'}
🤖 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐧𝐮𝐞𝐯𝐨𝐧𝐨𝐦𝐛𝐨𝐭 𝐭𝐞𝐱𝐭𝐨' : '𝐬𝐞𝐭𝐛𝐢𝐨𝐛𝐨𝐭 𝐭𝐞𝐱𝐭'}
🖼️ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐧𝐮𝐞𝐯𝐚𝐟𝐨𝐭𝐨𝐛𝐨𝐭 𝐢𝐦𝐚𝐠𝐞𝐧' : '𝐬𝐞𝐭𝐩𝐩𝐛𝐛𝐨𝐭 𝐢𝐦𝐚𝐠𝐞'}
🔄 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐫' : '𝐮𝐩𝐝𝐚𝐭𝐞'}
🚫 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐛𝐚𝐧𝐞𝐚𝐫𝐜𝐡𝐚𝐭' : '𝐛𝐚𝐧𝐜𝐡𝐚𝐭'}
✅ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐫𝐜𝐡𝐚𝐭' : '𝐮𝐧𝐛𝐚𝐧𝐜𝐡𝐚𝐭'}
🚪 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐬𝐚𝐥𝐢𝐫' : '𝐥𝐞𝐚𝐯𝐞'}
✅ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐫' : '𝐮𝐧𝐛𝐚𝐧𝐜𝐡𝐚𝐭'}
📄 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐨𝐛𝐭𝐞𝐧𝐞𝐫𝐜𝐨𝐝𝐢𝐠𝐨 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐚𝐫𝐜𝐡𝐢𝐯𝐨' : '𝐠𝐞𝐭𝐩𝐥𝐮𝐠𝐢𝐧 𝐟𝐢𝐥𝐞𝐧𝐚𝐦𝐞'}
🗑️ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐛𝐨𝐫𝐫𝐚𝐫𝐝𝐚𝐭𝐨𝐬 𝐧𝐮𝐦𝐞𝐫𝐨' : '𝐝𝐞𝐥𝐞𝐭𝐞𝐝𝐚𝐭𝐚𝐮𝐬𝐞𝐫 𝐧𝐮𝐦𝐛𝐞𝐫𝐨'}
📢 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐛𝐜𝐜 𝐭𝐞𝐱𝐭𝐨' : '𝐛𝐜𝐜𝐡𝐚𝐭𝐬 𝐭𝐞𝐱𝐭'}
📢 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐛𝐜𝐠𝐜 𝐭𝐞𝐱𝐭𝐨' : '𝐛𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭𝐠𝐜 𝐭𝐞𝐱𝐭'}
🎤 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐜𝐡 𝐭𝐞𝐱𝐭𝐨' : '𝐜𝐡𝐨𝐫𝐮𝐬 𝐭𝐞𝐱𝐭'}
📢 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? '𝐛𝐜 𝐭𝐞𝐱𝐭𝐨' : '𝐛𝐜𝐚𝐬𝐭𝐚𝐥𝐥 𝐭𝐞𝐱𝐭'}
    
 `.trim()
const img = ['https://i.imgur.com/Qz5hZbA.jpg',
'https://i.imgur.com/Qz5hZbA.jpg',
'https://i.imgur.com/Qz5hZbA.jpg']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
