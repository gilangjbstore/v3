/*Tq To
Allah
Ortu
Zaky Ganz
Dhani

Nb: Tq Jangan Dihapus

no jual sc ini !!
sc ini gratis !!

=================*/

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const hx = require('hxz-api')
const os = require('os')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const simple = require('./lib/simple.js')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
const { rules } = require('./setting/rules')
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot")
//══════════[ Setting ]══════════//

self = setting.self
dhakey = apikey.dhakey
autoread = setting.autoread
autoketik = setting.autoketik
autovn = setting.autovn
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
gaya1 = setting.gaya1
gaya2 = setting.gaya2
const fakeimage = fs.readFileSync ('./media/Zaky.jpg')
const thumb = fs.readFileSync ('./media/thumb.jpg')

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))

//══════════[ WAKTU ]══════════//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat malam 🏙'
}

//══════════[ Module Export ]══════════//
		
module.exports = Zaky = async (Zaky, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = Zaky.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Zaky.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Zaky.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        m = simple.smsg(Zaky, mek)
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const conts = mek.key.fromMe ? Zaky.user.jid : Zaky.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Zaky.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : true
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await Zaky.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
		pporang = await Zaky.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		
//══════════[ Mess Dll ]══════════//

mess = {
wait: '⌬ ```Waiting....```',
eror: 'Maaf terjadi kesalahan !!',
success: 'Sukses️',
error: {
stick: 'Itu bukan sticker kak !!',
Iv: 'Link invalid !!'
},
only: {
nsfw: 'Fitur nsfw belum di aktifkan silakan hubungi admin untuk mengaktifkan',
group: 'Fitur khusus grup !!',
owner: 'Fitur khusus owner !!',
admin: 'Fitur khusus admin !!',
Badmin: 'Silakan jadikan bot admin dulu !!'
}
}

const math = (teks) => {
return Math.floor(teks)
}
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Zaky.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Zaky.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Zaky.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Zaky.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Zaky.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Zaky.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Zaky.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Zaky.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

const listmsg = (from, title, desc, list) => {
let po = Zaky.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝗠𝗘𝗡𝗨","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
return Zaky.relayWAMessage(po, {waitForAck: true})
}
const reply = (teks) => {
Zaky.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
Zaky.sendMessage(hehe, teks, text)
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Zaky.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Zaky.sendMessage(from, teks.trim(), extendedText, { quoted: fgi, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
Zaky.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
const ftrol = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 5555, status: 1, surface : 1, message: `${ucapanWaktu} ${pushname}`, orderTitle: `${ucapanWaktu} ${pushname}`, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' }}}
const floc = { key : { participant : '0@s.whatsapp.net' }, message: { liveLocationMessage: { caption: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb }}}
const fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": {  "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const fvoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99999", "ptt": "true" }}}
const fgi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const textImg = (teks) => { return Zaky.sendMessage(from, teks, text, {quoted: fgi, thumbnail: fs.readFileSync('./media/thumb.jpg')})}
const fakeitem = (teks) => { Zaky.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/thumb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${ucapanWaktu} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}

//══════════[ Storage ]══════════//

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Zaky.sendMessage(to, media, type, { quoted: fgi, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}  


const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Zaky.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};


const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//══════════[ Grup ]══════════//

const hideTag = async function(from, text){
let anu = await Zaky.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
Zaky.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Zaky.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anu = await Zaky.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
Zaky.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendKontak = (from, nomor, nama) => {
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
Zaky.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
}

//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
Zaky.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Zaky.groupRemove(from, [sender])
}     
if (!m.key.fromMe && !isOwner && bad.includes(messagesD)) {
ano = fs.readFileSync('./media/sticker/toxic.webp')
Zaky.sendMessage(from, ano, sticker, { quoted: mek})
}

//══════════[ Dll ]══════════//

if (autoread){
Zaky.chatRead(from, "read")
} else if (autoketik) {
Zaky.updatePresence(from, Presence.composing)
} else if (autovn) {
Zaky.updatePresence(from, Presence.recording)
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	if (!mek.key.fromMe && !isOwner && self === true) return
switch (command) {

//══════════[ FITUR FITURNYA UY ]══════════//


case 'command':
listMsg = {
buttonText: '𝗠𝗘𝗡𝗨',
footerText: `*© ${ownername}*`,
description: `Hai kak @${senderr.split('@')[0]}, Silahkan pilih menu disini`,
sections: [
{
"title": `${tanggal} - ${time} WIB`,
rows: [
{
"title": "[💬]GROUP MENU",
"description": `Menampilkan List Fitur Khusus Group`,
"rowId": `${prefix}grupmenu`
},
{
"title": "[📤]DOWNLOAD MENU",
"description": `Menampilkan List Fitur Untuk Download`,
"rowId": `${prefix}downloadmenu`
},
{
"title": "[📝]MAKER MENU",
"description": `Menampilkan List Fitur Untuk Membuatkan Logo`,
"rowId": `${prefix}makermenu`
},
{
"title": "[💸]SEWA BOT",
"description": `Menampilkan List Sewa`,
"rowId": `${prefix}sewa`
},
{
"title": "[📃]RANDOM TEXT",
"description": `Menampilkan List Fitur Random Teks`,
"rowId": `${prefix}randomtext`
},
{
"title": "[🤖️]JADI BOT",
"description": `Menampilkan List Fitur Jadi Bot`,
"rowId": `${prefix}jadibotmenu`
},
{
"title": "[🖼️]RANDOM IMAGE",
"description": `Menampilkan List Fitur Random Foto`,
"rowId": `${prefix}randomimage`
},
{
"title": "[🎥]RANDOM VIDEO",
"description": `Menampilkan List Fitur Random Video`,
"rowId": `${prefix}randomvideo`
},
{
"title": "[🍑]ASUPAN MENU",
"description": `Menampilkan List Fitur Asupan 18+`,
"rowId": `${prefix}asupanmenu`
},
{
"title": "[🧕]CECAN MENU",
"description": `Menampilkan List Fitur Cecan Dan Cogan`,
"rowId": `${prefix}cecanmenu`
},
{
"title": "[🈚]ANIME MENU",
"description": `Menampilkan List Fitur Anime`,
"rowId": `${prefix}animemenu`
},
{
"title": "[🔞]NSFW MENU",
"description": `Menampilkan List Fitur Nsfw 18+`,
"rowId": `${prefix}nsfwmenu`
},
{
"title": "[🐚]KERANG MENU",
"description": `Menampilkan List Fitur Kerang`,
"rowId": `${prefix}kerangmenu`
},
{
"title": "[🎮]FUN MENU",
"description": `Menampilkan List Fitur Game`,
"rowId": `${prefix}funmenu`
},
{
"title": "[🎀]STICKER MENU",
"description": `Menampilkan List Fitur Sticker`,
"rowId": `${prefix}stickermenu`
},
{
"title": "[🏷️]OTHER MENU",
"description": `Menampilkan List Fitur Lainnya`,
"rowId": `${prefix}othermenu`
},
{
"title": "[💰]Donasi",
"description": `Makasih Yang Udah Donasi`,
"rowId": `${prefix}donasi`
},
{
"title": "[👤]OWNER MENU",
"description": `Menampilkan List Fitur Khusus Owner`,
"rowId": `${prefix}ownermenu`
}
]
}],
listType: 1
}
Zaky.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [senderr]},quoted:fgi})
break
case 'grupmenu':
case 'groupmenu':
menu =
`*┏━━> 「 GRUP MENU 」*
${gaya2} ${prefix}antilink _on / off_
${gaya2} ${prefix}antivirtex _on / off_
${gaya2} ${prefix}welcome _on / off_
${gaya2} ${prefix}nsfw _on / off_
${gaya2} ${prefix}group _buka / tutup_
${gaya2} ${prefix}promote _@tag / reply_
${gaya2} ${prefix}demote _@tag / reply_
${gaya2} ${prefix}add _628xx_
${gaya2} ${prefix}kick _@tag / reply_
${gaya2} ${prefix}setpp _reply_
${gaya2} ${prefix}setdesc _teks_
${gaya2} ${prefix}setname _teks_
${gaya2} ${prefix}hidetag _teks_
${gaya2} ${prefix}kontak _628x|Nama_
${gaya2} ${prefix}kontag _@tag|Nama_
${gaya2} ${prefix}sticktag _Reply Sticker_
${gaya2} ${prefix}totag _Reply Image_
${gaya2} ${prefix}promoteall
${gaya2} ${prefix}demoteall
${gaya2} ${prefix}listadmin
${gaya2} ${prefix}grupowner
${gaya2} ${prefix}linkgrup
${gaya2} ${prefix}infogrup
${gaya2} ${prefix}listonline
${gaya2} ${prefix}resetlinkgrup
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'downloadmenu':
menu =
`*┏━━> 「 DOWNLOAD MENU 」*
${gaya2} ${prefix}ytmp3 _Link_
${gaya2} ${prefix}ytmp4 _Link_
${gaya2} ${prefix}tiktok _Link_
${gaya2} ${prefix}tiktokwm _Link_
${gaya2} ${prefix}tiktoknowm _Link_
${gaya2} ${prefix}tiktokaudio _Link_
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'makermenu':
menu =
`*┏━━> 「 MAKER MENU 」*
${gaya2} ${prefix}blackpink _Teks_
${gaya2} ${prefix}halloween _Teks_
${gaya2} ${prefix}halloween2 _Teks_
${gaya2} ${prefix}3dgradient _Teks_
${gaya2} ${prefix}naturalleaves _Teks_
${gaya2} ${prefix}dropwater _Teks_
${gaya2} ${prefix}blood _Teks_
${gaya2} ${prefix}blood2 _Teks_
${gaya2} ${prefix}snow _Teks_
${gaya2} ${prefix}cloud _Teks_
${gaya2} ${prefix}neondevil _Teks_
${gaya2} ${prefix}neon _Teks_
${gaya2} ${prefix}glowingneonlight _Teks_
${gaya2} ${prefix}neonlight _Teks_
${gaya2} ${prefix}neonlight2 _Teks_
${gaya2} ${prefix}neonlight3 _Teks_
${gaya2} ${prefix}greenneon _Teks_
${gaya2} ${prefix}toxic _Teks_
${gaya2} ${prefix}matrix _Teks_
${gaya2} ${prefix}thunder _Teks_
${gaya2} ${prefix}thunder2 _Teks_
${gaya2} ${prefix}bokeh _Teks_
${gaya2} ${prefix}carbontext _Teks_
${gaya2} ${prefix}christmas _Teks_
${gaya2} ${prefix}breakwall _Teks_
${gaya2} ${prefix}roadwarning _Teks_
${gaya2} ${prefix}engraved3d _Teks_
${gaya2} ${prefix}embossed _Teks_
${gaya2} ${prefix}3dstone _Teks_
${gaya2} ${prefix}futuristic _Teks_
${gaya2} ${prefix}sketch _Teks_
${gaya2} ${prefix}bluecircuit _Teks_
${gaya2} ${prefix}space _Teks_
${gaya2} ${prefix}magmahot _Teks_
${gaya2} ${prefix}artpapercut _Teks_
${gaya2} ${prefix}3dluxurygold _Teks_
${gaya2} ${prefix}robotr2d2 _Teks_
${gaya2} ${prefix}harrypotter _Teks_
${gaya2} ${prefix}glitch3 _Teks_
${gaya2} ${prefix}greenhorror _Teks_
${gaya2} ${prefix}horrorgift _Teks_
${gaya2} ${prefix}erodedmetal _Teks_
${gaya2} ${prefix}3dglowingmetal _Teks_
${gaya2} ${prefix}blackmetal _Teks_
${gaya2} ${prefix}bluemetal _Teks_
${gaya2} ${prefix}shynimetal _Teks_
${gaya2} ${prefix}rustymetal _Teks_
${gaya2} ${prefix}metalpurple _Teks_
${gaya2} ${prefix}metalrainbow _Teks_
${gaya2} ${prefix}metaldarkgold _Teks_
${gaya2} ${prefix}colorfullluxurymetal _Teks_
${gaya2} ${prefix}glossybluemetal _Teks_
${gaya2} ${prefix}3dglossymetal _Teks_
${gaya2} ${prefix}3ddeepseametal _Teks_
${gaya2} ${prefix}leddisplayscreen _Teks_
${gaya2} ${prefix}metallic _Teks_
${gaya2} ${prefix}glossymetallic _Teks_
${gaya2} ${prefix}christmastree _Teks_
${gaya2} ${prefix}sparklesmerrychristmas _Teks_
${gaya2} ${prefix}countryflag3d _Teks_
${gaya2} ${prefix}americanflag3d _Teks_
${gaya2} ${prefix}3dscfi _Teks_
${gaya2} ${prefix}3drainbow _Teks_
${gaya2} ${prefix}3dwaterpipe _Teks_
${gaya2} ${prefix}3dchrome _Teks_
${gaya2} ${prefix}bluegem _Teks_
${gaya2} ${prefix}purplegem _Teks_
${gaya2} ${prefix}pinkcandy _Teks_
${gaya2} ${prefix}transformer _Teks_
${gaya2} ${prefix}berry _Teks_
${gaya2} ${prefix}brokenglass _Teks_
${gaya2} ${prefix}3drealistic _Teks_
${gaya2} ${prefix}3dunderwater _Teks_
${gaya2} ${prefix}writeinsandsummerbeach _Teks_
${gaya2} ${prefix}sandwriting _Teks_
${gaya2} ${prefix}foilballoon _Teks_
${gaya2} ${prefix}3dglue _Teks_
${gaya2} ${prefix}1917 _Teks_
${gaya2} ${prefix}minion _Teks_
${gaya2} ${prefix}doubleexposure _Teks_
${gaya2} ${prefix}holographic3d _Teks_
${gaya2} ${prefix}deluxegold _Teks_
${gaya2} ${prefix}deluxesilver _Teks_
${gaya2} ${prefix}glossycarbon _Teks_
${gaya2} ${prefix}fabric _Teks_
${gaya2} ${prefix}xmascards3d _Teks_
${gaya2} ${prefix}wicker _Teks_
${gaya2} ${prefix}fireworksparkle _Teks_
${gaya2} ${prefix}skeleton _Teks_
${gaya2} ${prefix}ultragloss _Teks_
${gaya2} ${prefix}denim _Teks_
${gaya2} ${prefix}decorategreen _Teks_
${gaya2} ${prefix}peridot _Teks_
${gaya2} ${prefix}rock _Teks_
${gaya2} ${prefix}lava _Teks_
${gaya2} ${prefix}rainbowequalizer _Teks_
${gaya2} ${prefix}purpleglass _Teks_
${gaya2} ${prefix}decorativeglass _Teks_
${gaya2} ${prefix}chocolatecake _Teks_
${gaya2} ${prefix}strawberry _Teks_
${gaya2} ${prefix}koifish _Teks_
${gaya2} ${prefix}bread _Teks_
${gaya2} ${prefix}3dbox _Teks_
${gaya2} ${prefix}freeadvancedglow _Teks_
${gaya2} ${prefix}honey _Teks_
${gaya2} ${prefix}marble _Teks_
${gaya2} ${prefix}marbleslabs _Teks_
${gaya2} ${prefix}icecold _Teks_
${gaya2} ${prefix}fruitjuice _Teks_
${gaya2} ${prefix}abstragold _Teks_
${gaya2} ${prefix}biscuit _Teks_
${gaya2} ${prefix}bagel _Teks_
${gaya2} ${prefix}wood _Teks_
${gaya2} ${prefix}hexagolden _Teks_
${gaya2} ${prefix}wonderfulgraffitiart _Teks_
${gaya2} ${prefix}8bit _Teks1&Teks2_
${gaya2} ${prefix}pornhub _Teks1&Teks2_
${gaya2} ${prefix}glitch _Teks1&Teks2_
${gaya2} ${prefix}glitch2 _Teks1&Teks2_
${gaya2} ${prefix}layered _Teks1&Teks2_
${gaya2} ${prefix}3dsteel _Teks1&Teks2_
${gaya2} ${prefix}realistic _Teks1&Teks2_
${gaya2} ${prefix}lionlogo _Teks1&Teks2_
${gaya2} ${prefix}ninjalogo _Teks1&Teks2_
${gaya2} ${prefix}wolf _Teks1&Teks2_
${gaya2} ${prefix}wolf2 _Teks1&Teks2_
${gaya2} ${prefix}halloween3 _Teks1&Teks2_
${gaya2} ${prefix}marvel _Teks1&Teks2_
${gaya2} ${prefix}marvel2 _Teks1&Teks2_
${gaya2} ${prefix}cinematichorror _Teks1&Teks2_
${gaya2} ${prefix}avengers _Teks1&Teks2_
${gaya2} ${prefix}graffiti3 _Teks1&Teks2_
${gaya2} ${prefix}captainamerica _Teks1&Teks2_
${gaya2} ${prefix}girlneko _Teks1&Teks2_
${gaya2} ${prefix}sadboy _Teks1&Teks2_
${gaya2} ${prefix}makerkaneki _Teks1&Teks2_
${gaya2} ${prefix}rem _Teks1&Teks2_
${gaya2} ${prefix}lolimaker _Teks1&Teks2_
${gaya2} ${prefix}gura _Teks1&Teks2_
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomtext':
menu =
`*┏━━> 「 RANDOM TEXT 」*
${gaya2} ${prefix}faktaunik
${gaya2} ${prefix}pantun
${gaya2} ${prefix}puisi
${gaya2} ${prefix}quotes
${gaya2} ${prefix}quoteskanye
${gaya2} ${prefix}quotesislami
${gaya2} ${prefix}quotesanime
${gaya2} ${prefix}quotesdilan
${gaya2} ${prefix}quotesff
${gaya2} ${prefix}quotespubg
${gaya2} ${prefix}quoteshacker
${gaya2} ${prefix}katabijak
${gaya2} ${prefix}katailham
${gaya2} ${prefix}katasindiran
${gaya2} ${prefix}katabucin
${gaya2} ${prefix}katabucin2
${gaya2} ${prefix}kataml
${gaya2} ${prefix}katagalau
${gaya2} ${prefix}katagombal
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'jadibotmenu':
menu =
`*┏━━> 「 JADIBOT MENU 」*
${gaya2} ${prefix}jadibot _(Hanya Owner)_
${gaya2} ${prefix}stopjadibot _(Hanya Owner)_
${gaya2} ${prefix}listbot _(Hanya Owner)_
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomimage':
menu =
`*┏━━> 「 RANDOM IMAGE 」*
${gaya2} ${prefix}ppcouple
${gaya2} ${prefix}meme
${gaya2} ${prefix}memeindo
${gaya2} ${prefix}quotesimage
${gaya2} ${prefix}katakataimage
${gaya2} ${prefix}renungan
${gaya2} ${prefix}darkjokes
${gaya2} ${prefix}aesthetic
${gaya2} ${prefix}wallpaperhacker
${gaya2} ${prefix}wallpaperhacker2
${gaya2} ${prefix}wallpaperharley
${gaya2} ${prefix}wallpaperjoker
${gaya2} ${prefix}wallpaperpubg
${gaya2} ${prefix}wallpaperhp
${gaya2} ${prefix}wallpaperhp2
${gaya2} ${prefix}wallpaperkpop
${gaya2} ${prefix}wallpaperblackpink
${gaya2} ${prefix}wallpapergame
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomvideo':
menu =
`*┏━━> 「 RANDOM VIDEO 」*
${gaya2} ${prefix}beatvn
${gaya2} ${prefix}jedagjedugff
${gaya2} ${prefix}jedagjedugml
${gaya2} ${prefix}jedagjedugpubg
${gaya2} ${prefix}storywa
${gaya2} ${prefix}storygalau
${gaya2} ${prefix}storytruk
${gaya2} ${prefix}storybus
${gaya2} ${prefix}storyanime
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'asupanmenu':
menu =
`*┏━━> 「 ASUPAN MENU 」*
${gaya2} ${prefix}asupan
${gaya2} ${prefix}asupanloli
${gaya2} ${prefix}hijaber
${gaya2} ${prefix}bocil
${gaya2} ${prefix}rikagusriani
${gaya2} ${prefix}santuy
${gaya2} ${prefix}ukhty
${gaya2} ${prefix}gheayubi
${gaya2} ${prefix}nantalia
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'cecanmenu':
menu =
`*┏━━> 「 CECAN MENU 」*
${gaya2} ${prefix}cogan
${gaya2} ${prefix}cecan
${gaya2} ${prefix}cecan2
${gaya2} ${prefix}cogan2
${gaya2} ${prefix}jeni
${gaya2} ${prefix}jiso
${gaya2} ${prefix}justina
${gaya2} ${prefix}lisa
${gaya2} ${prefix}rose
${gaya2} ${prefix}ryujin
${gaya2} ${prefix}china
${gaya2} ${prefix}vietnam
${gaya2} ${prefix}thainlad
${gaya2} ${prefix}indonesia
${gaya2} ${prefix}korea
${gaya2} ${prefix}japan
${gaya2} ${prefix}malaysia
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'animemenu':
menu =
`*┏━━> 「 ANIME MENU 」*
${gaya2} ${prefix}naruto
${gaya2} ${prefix}loli
${gaya2} ${prefix}waifu
${gaya2} ${prefix}neko
${gaya2} ${prefix}husbu
${gaya2} ${prefix}milf
${gaya2} ${prefix}cosplay
${gaya2} ${prefix}nekonime
${gaya2} ${prefix}shota
${gaya2} ${prefix}wallml
${gaya2} ${prefix}akira
${gaya2} ${prefix}akiyama
${gaya2} ${prefix}ana
${gaya2} ${prefix}asuna
${gaya2} ${prefix}ayuzawa
${gaya2} ${prefix}boruto
${gaya2} ${prefix}chiho
${gaya2} ${prefix}chitoge
${gaya2} ${prefix}deidara
${gaya2} ${prefix}eba
${gaya2} ${prefix}elaina
${gaya2} ${prefix}emilia
${gaya2} ${prefix}erza
${gaya2} ${prefix}gremory
${gaya2} ${prefix}hestia
${gaya2} ${prefix}hinata
${gaya2} ${prefix}isuzu
${gaya2} ${prefix}itachi
${gaya2} ${prefix}itori
${gaya2} ${prefix}kagura
${gaya2} ${prefix}kakasih
${gaya2} ${prefix}kaori
${gaya2} ${prefix}kaneki
${gaya2} ${prefix}kotori
${gaya2} ${prefix}kurumi
${gaya2} ${prefix}madara
${gaya2} ${prefix}mikasa
${gaya2} ${prefix}miku
${gaya2} ${prefix}minato
${gaya2} ${prefix}nezuko
${gaya2} ${prefix}rize
${gaya2} ${prefix}sagiri
${gaya2} ${prefix}sakura
${gaya2} ${prefix}sasuke
${gaya2} ${prefix}shina
${gaya2} ${prefix}shinka
${gaya2} ${prefix}shinomiya
${gaya2} ${prefix}shizuka
${gaya2} ${prefix}tejina
${gaya2} ${prefix}toukachan
${gaya2} ${prefix}tsunade
${gaya2} ${prefix}yotsuba
${gaya2} ${prefix}yuki
${gaya2} ${prefix}yumeko
${gaya2} ${prefix}fanart
${gaya2} ${prefix}nino
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'nsfwmenu':
menu =
`*┏━━> 「 NSFW MENU 」*
${gaya2} ${prefix}ass
${gaya2} ${prefix}ahegao
${gaya2} ${prefix}bdsm
${gaya2} ${prefix}blowjob
${gaya2} ${prefix}cuckold
${gaya2} ${prefix}cum
${gaya2} ${prefix}ero
${gaya2} ${prefix}femdom
${gaya2} ${prefix}foot
${gaya2} ${prefix}gangbang
${gaya2} ${prefix}glasses
${gaya2} ${prefix}hentai
${gaya2} ${prefix}jahy
${gaya2} ${prefix}masturbation
${gaya2} ${prefix}neko
${gaya2} ${prefix}orgy
${gaya2} ${prefix}panties
${gaya2} ${prefix}pussy
${gaya2} ${prefix}thighs
${gaya2} ${prefix}yuri
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'stickermenu':
menu =
`*┏━━> 「 STICKER MENU 」*
${gaya2} ${prefix}sticker _reply_
${gaya2} ${prefix}toimg _reply_
${gaya2} ${prefix}smeme Atas|Bawah
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'gamemenu':
menu =
`*┏━━> 「 GAME MENU 」*
${gaya2} ${prefix}truth
${gaya2} ${prefix}dare
${gaya2} ${prefix}terganteng
${gaya2} ${prefix}terjelek
${gaya2} ${prefix}tercantik
${gaya2} ${prefix}tergay
${gaya2} ${prefix}terpedo
${gaya2} ${prefix}terwibu
${gaya2} ${prefix}jadian
${gaya2} ${prefix}ngewe
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'kerangmenu':
menu =
`*┏━━>「 KERANG MENU 」*
${gaya2} ${prefix}apakah _Teks_
${gaya2} ${prefix}kapankah _Teks_
${gaya2} ${prefix}bisakah _Teks_
${gaya2} ${prefix}bagaimanakah _Teks_
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'funmenu':
menu =
`*┏━━>「 FUN MENU 」*
${gaya2} ${prefix}suit
${gaya2} ${prefix}cekme
${gaya2} ${prefix}beban
${gaya2} ${prefix}babi
${gaya2} ${prefix}ngewe
${gaya2} ${prefix}sange
${gaya2} ${prefix}gay
${gaya2} ${prefix}wibu
${gaya2} ${prefix}terganteng
${gaya2} ${prefix}tercantik
${gaya2} ${prefix}jadian
${gaya2} ${prefix}rate _Teks_
${gaya2} ${prefix}ceksange _Teks_
${gaya2} ${prefix}cekgay _Teks_
${gaya2} ${prefix}cekganteng _Teks_
${gaya2} ${prefix}cekcantik _Teks_
${gaya2} ${prefix}cekmati _Teks_
${gaya2} ${prefix}cekwatak _Teks_
${gaya2} ${prefix}cekhobby _Teks_
${gaya2} ${prefix}ceklesbi _Teks_
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'othermenu':
menu =
`*┏━━> 「 OTHER MENU 」*
${gaya2} ${prefix}runtime
${gaya2} ${prefix}speed
${gaya2} ${prefix}sewabot
${gaya2} ${prefix}payment
${gaya2} ${prefix}owner
${gaya2} ${prefix}sc
${gaya2} ${prefix}infosc
${gaya2} ${prefix}ssweb _Url_
${gaya2} ${prefix}delete _Reply pesan bot_
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ownermenu':
menu =
`*┏━━> 「 OWNER MENU 」*
${gaya2} ${prefix}bc _Teks_
${gaya2} ${prefix}bcnowm _Teks_
${gaya2} ${prefix}bc2 _Teks_
${gaya2} ${prefix}bcgc _Teks_
${gaya2} ${prefix}setnamabot _Teks_
${gaya2} ${prefix}setbio _Teks_
${gaya2} ${prefix}setppbot _Reply Image_
${gaya2} ${prefix}autoread _On / Off_
${gaya2} ${prefix}autoketik _On / Off_
${gaya2} ${prefix}autovn _On / Off_
${gaya2} ${prefix}clearall
${gaya2} ${prefix}public
${gaya2} ${prefix}self
┗━━━━━━━━━━━>`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

//══════════[ PAYMENT ]══════════//
case 'sewa':
case 'sewabot':
listMsg = {
buttonText: 'LIST HARGA',
footerText: `*© ${ownername}*`,
description: `Hai kak @${senderr.split('@')[0]}, Silahkan pilih List Disini`,
sections: [
{
"title": `${tanggal} - ${time} WIB`,
rows: [
{
"title": "1 MINGGU",
"description": `Rp 5000`,
},
{
"title": "1 BULAN",
"description": `Rp 10.000`
},
{
"title": "PERMANEN",
"description": `Rp 15.000`
},
{
"title": "PAYMENT",
"description": `Pembayaran / Payment`,
"rowId": `${prefix}payment`
},
{
"title": "OWNER",
"description": `Chat Jika Perlu`,
"rowId": `${prefix}owner`
}
]
}],
listType: 1
}
Zaky.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [senderr]},quoted:fgi})
break
case 'bayar':
case 'payment':
case 'donasi':
gambar = fs.readFileSync('./media/sewa.jpg')
menunya = `*「 PAYMENT 」*

• Gopay : _Silakan scan qr di atas_
• Dana : _Silakan scan qr di atas_
• Ovo : _Silakan scan qr di atas_
• Pulsa : _089525641549_`
but = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }
]
sendButImage(from, menunya, `*_${tanggal} - ${time} WIB_*`, gambar, but)
break

//══════════[ FITUR DOWNLOAD ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

case 'ytmp3':
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=${dhakey}`)
ytmp3 = await getBuffer(anu.result.url)
reply(`_audio sedang diproses, silahkan tunggu beberapa saat lagi_`)
Zaky.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
break
case 'ytmp4':
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${dhakey}`)
ytmp4 = await getBuffer(anu.result.url)
reply(`_video sedang diproses, silahkan tunggu beberapa saat lagi_`)
Zaky.sendMessage(from, ytmp4, video, {caption:`Done kak`, thumbnail:Buffer.alloc(0), quoted:mek})
break
case 'tiktok':
menu = `Hi ${pushname}
Kakak pasti kepingin download
Video / audio dari tiktok 🐣
Silakan pilih salah satu


• ${prefix}ttwm _Link_
• ${prefix}ttnowm _Link_
• ${prefix}ttaudio _Link_`
fakeitem(menu)
break
case 'tiktoknowm':
case 'ttnowm':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=${dhakey}`)
tiktok = await getBuffer(anu.result.nowatermark)
Zaky.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break
case 'tiktokwm':
case 'ttwm':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=${dhakey}`)
tiktok = await getBuffer(anu.result.watermark)
Zaky.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break
case 'tiktokaudio':
case 'ttaudio':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=${dhakey}`)
tiktok = await getBuffer(anu.result.audio)
Zaky.sendMessage(from, tiktok, audio, {quoted: mek})
break

//══════════[ FITUR ASUPAN ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

case 'asupan':
case 'asupanloli':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'nantalia':
reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButVideo(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'hijaber':
reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/hijaber?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break

//══════════[ FITUR CECAN ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

case 'cecan':
case 'cogan':
case 'cecan2':
case 'cogan2':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break

//══════════[ RANDOM TEXT ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

case 'pantun':
case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'kataml':
case 'katagalau':
case 'katagombal':
case 'quotesislami':
case 'quotesanime':
case 'quotesdilan':
case 'quotesff':
case 'quotespubg':
case 'quoteshacker':
oke = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/${command}?apikey=${dhakey}`)
Zaky = (oke.result)
sendButMessage(from, Zaky, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'quotes':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes?apikey=${dhakey}`)
Zaky = (anu.result.quotes)
sendButMessage(from, Zaky, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'quoteskanye':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes/kanye?apikey=${dhakey}`)
Zaky = (anu.result.text_id)
sendButMessage(from, Zaky, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;

//══════════[ RANDOM IMAGE ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/ppcouple?apikey=${dhakey}`)
cowo = await getBuffer(anu.result.male)
Cowok = `_Ini cowoknya_`
sendButImage(from, Cowok, `*_${tanggal} - ${time} WIB_*`, cowo, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
cewe = await getBuffer(anu.result.female)
Cewek = `_Ini ceweknya_`
sendButImage(from, Cewek, `*_${tanggal} - ${time} WIB_*`, cewe, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'meme':
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/meme?apikey=${dhakey}`)
buffer = await getBuffer(anu.result.url)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'quotesimage':
case 'katakataimage':
case 'renungan':
case 'memeindo':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'mobil':
case 'motor':
reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'darkjoker':
case 'darkjokes':
case 'darkjokers':
reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/darkjokes?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break

//----> FITUR ANIME <----//

case 'waifu':
case 'neko':
case 'naruto':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'nekonime':
case 'shota':
case 'wallml':
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestia':
case 'hinata':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kagura':
case 'kakasih':
case 'kaori':
case 'kaneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'nezuko':
case 'rize':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'tejina':
case 'toukachan':
case 'tsunade':
case 'yotsuba':
case 'yuki':
case 'yumeko':
case 'fanart':
case 'nino':
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/anime/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'jahy':
case 'masturbation':
case 'neko':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
if (!isGroup) return reply('Buset ada anak b*kep\nMending di grup aja sono biar semua pada kenak dosa 😎')
if (!isNsfw) return reply(mess.only.nsfw)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/nsfw/${command}?apikey=${dhakey}`)
buffer = await getBuffer(anu.result)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break

//══════════[ RANDOM VIDEO ]══════════//

case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storyanime':
case 'storywa':
case 'storygalau':
case 'storytruk':
case 'storybus':
reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButVideo(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break

//══════════[ FITUR MAKER ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

//----> 1 TEXT <----//

case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anu.result)
Zaky.sendMessage(from, oke, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break
case 'hartatahta': 
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
Zaky.sendMessage(from, harta, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break

//----> 2 TEXT <----//

case '8bit':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'pornhub':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'layered':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case '3dsteel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'realistic':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lionlogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'ninjalogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'halloween3':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween3?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'cinematichorror':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'avengers':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'graffiti3':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'captainamerica':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Zaky.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'girlneko':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Zaky.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'sadboy':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Zaky.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'makerkaneki':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(12)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Zaky.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'rem':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Zaky.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lolimaker':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Zaky.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'gura':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Zaky.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break

//══════════[ FITUR OTHER ]══════════//

case 'ssweb':
case 'ss':
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
Zaky.sendMessage(from, buff, image, {quoted: mek, caption : teks})
break
case 'sc':
case 'script':
case 'sourcode':
fakeitem(`_MAU SC? CHAT OWNER_`)
break
case 'rules':
case 's&k':
fakeitem(rules(prefix, botname))
break
case 'runtime':
case 'test':
textImg(`Bot Aktif Selama ${runtime(process.uptime())}`)
break
case 'ping':
case 'speed':
timestampe = speed();
latensie = speed() - timestampe
textImg(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
break
case 'd':
case 'del':
case 'delete':
Zaky.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break


//══════════[ FITUR STICKER ]══════════//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Zaky.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Zaky.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Zaky.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Zaky.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Zaky.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Zaky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
case 'smeme': case 'stickermeme':
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
try {
if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
reply(mess.wait)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
var imgbb = require('imgbb-uploader')
var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await Zaky.downloadAndSaveMediaMessage(enmedia)
var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
Zaky.sendMessage(from, resu, image, {quoted: mek})
fs.unlinkSync(media)
} catch (e) {
return reply(`${e}`)
console.log(e)
}
break

//══════════[ FITUR OWNER ]══════════//

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Zaky.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: fgi, 
})
reply(`_Tuh Kak Ownerku_`)
break
case 'bcnowm':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya ?')
anu = await Zaky.chats.all()
if (isMedia && !Zaky.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Zaky.downloadMediaMessage(encmedia)
for (let _ of anu) {
Zaky.sendMessage(_.jid, buff, image, { caption: `${body.slice(7)}` })
}
reply('Sukses Broadcast Image')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(7)}`)
}
reply('Sukses Broadcast Text')
}
break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Zaky.chats.all()
             if (isMedia && !Zaky.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Zaky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Zaky
             bc100 = await Zaky.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Zaky.sendMessage(_.jid, bc100, image, {quoted: fgi, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Zaky.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}sewa`,
			"buttonText": {"displayText": "sewa"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
case 'bc2':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anu = await Zaky.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Zaky.downloadMediaMessage(encmedia)
for (let _ of anu) {
Zaky.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Zaky.downloadMediaMessage(encmedia)
for (let _ of anu) {
Zaky.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Zaky.downloadMediaMessage(encmedia)
for (let _ of anu) {
Zaky.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else {
for (let _ of anu) {
sendMess(_.jid, `Bot Broadcast\n\n${body.slice(4)}`)
}
reply(`Sukses Broadcast`)
}
break
case 'bcgc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya mana ?')
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bcgc = await Zaky.downloadMediaMessage(encmedia)
for (let _ of groupMembers) {
Zaky.sendMessage(_.jid, bcgc, image, { caption: `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}` })
}
reply('')
} else {
for (let _ of groupMembers) {
sendMess(_.jid, `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
}
reply('Suksess broadcast group')
}
break
case 'clearall':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
anu = await Zaky.chats.all()
Zaky.setMaxListeners(25)
for (let _ of anu) {
Zaky.deleteChat(_.jid)
}
textImg('Sukses delete all chat')
break
case 'setppbot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Zaky.downloadAndSaveMediaMessage(encmedia, './database/sampah/media_user')
await Zaky.updateProfilePicture(botNumber, media)
reply('Makasih foto profil barunya ownerku sayang 😚')
break
case 'setbio':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
iyek = body.slice(8)
Zaky.setStatus(`${iyek}`)
reply(`Sukses mengganti bio ke ${body.slice(8)}`)
break
case 'setnamabot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anu = body.slice(11)
Zaky.updateProfileName(anu)
reply(`Sukses mengganti namabot ke ${body.slice(11)}`)
break
case 'public':
if (!mek.key.fromMe && !isOwner) return reply('Luh Siapa Sih Bang ?')
if (self === false) return
self = false
reply(`\`\`\`MODE - PUBLIC\`\`\``)
break
case 'self':
if (!mek.key.fromMe && !isOwner) return reply('Luh Siapa Sih Bang ?')
if (self === true) return
self = true
reply(`\`\`\`MODE - SELF\`\`\``)
break
case 'autoread':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autoread = true
reply('Succes..')
} else if(args[0] == 'off'){
autoread = false
reply('Succes..')
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autoketik = true
reply('Succes..')
reply('Ingat jika autovn hidup silakan di matikan dulu')
} else if(args[0] == 'off'){
autoketik = false
reply('Succes..')
}
break
case 'autovn':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autovn = true
reply('Succes..')
reply('Ingat jika autoketik hidup silakan di matikan dulu')
} else if(args[0] == 'off'){
autovn = false
reply('Succes..')
}
break

//══════════[ FITUR GROUP ]══════════//

case 'nsfw':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}nsfw on untuk mengaktifkan\n${prefix}nsfw off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isNsfw) return reply('*nsfw sudah aktif !!*')
_nsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur nsfw di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isNsfw) return reply('*nsfw sudah off sebelumnya !!*')
_nsfw.splice(from, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur nsfw di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[0] === 'buka') {
reply(`*Berhasil Membuka Grup ${groupMetadata.subject}
- [ 𝗚𝗿𝗼𝘂𝗽 Open ] - 
𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 Buka 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏
𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 SEMUA PESERTA 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏*`)
Zaky.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
reply(`Berhasil Menutup Grup ${groupMetadata.subject}

- [ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗹𝗼𝘀𝗲𝗱 ] - 
𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 𝑻𝒖𝒕𝒖𝒑 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏
𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑯𝒂𝒏𝒚𝒂 𝑨𝒅𝒎𝒊𝒏 𝒀𝒂𝒏𝒈 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏`)
Zaky.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Zaky.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Zaky.sendMessage(from, yeh, text, { quoted: fgi })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Zaky.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Zaky.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Zaky.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Zaky.groupDemoteAdmin(from, mentioned)
}
break
case 'demoteall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
Zaky.groupDemoteAdmin(from, members_id)
break
case 'promoteall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
Zaky.groupMakeAdmin(from, members_id)
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Zaky.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Zaky.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Zaky.groupRemove(from, [anu]);
reply(mess.success);
} else {
Zaky.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Zaky.groupUpdateSubject(from, `${body.slice(9)}`)
Zaky.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Zaky.groupUpdateDescription(from, `${body.slice(9)}`)
Zaky.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Zaky.downloadMediaMessage(encmedia)
Zaky.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Zaky.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Zaky.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Zaky.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Zaky.chats.get(ido).presences), Zaky.user.jid]
Zaky.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'sticktag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Zaky.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Zaky.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Zaky.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else {
reply(`*Reply sticker yang sudah dikirim*`)
}
break
case 'totag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Zaky.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Zaky.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Zaky.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Zaky.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Zaky.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Zaky.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Zaky.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Zaky.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4',
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Zaky.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Zaky.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Zaky.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Zaky.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
}
break
case 'listadmin':
case 'adminlist':
if (!isGroup) return reply(mess.only.group)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()}. @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'ownergrup':
case 'ownergroup':
if (!isGroup) return reply(mess.only.group)
options = {
text: `Nih kak Yang Punya grupnya : https://wa.me/${from.split("-")[0]}`,
contextInfo: { mentionedJid: [from] }
}
Zaky.sendMessage(from, options, text, { quoted: mek })
break
case 'kontag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
argzi = arg.split('|')
if (!argzi) return reply(`Penggunaan ${prefix}kontag @tag|nama`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
} else {
hideTagKontak(from, argzi[0], argzi[1])
}
break
case 'kontak':
if (!isGroup) return reply(mess.only.group)
argzu = arg.split('|')
if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
sendKontak(from, mentioned[0].split('@')[0], argzu[1])
} else {
sendKontak(from, argzu[0], argzu[1])
}
break


case 'infosc':
fakeitem(`┏━━> [Scirp Botz]
┣ • SC ORI : Dhani bot ?
┣ • RECODE : Zaky Ganz
┗━━━━━━━━━━━>`)
break
//━━━━━━━━━━━━━━━[ FITUR GAME ]━━━━━━━━━━━━━━━━━//
case 'rate':
case 'nilai':
if (!isGroup) return reply(mess.only.group)
rate = body.slice(1)
const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const te = ra[Math.floor(Math.random() * ra.length)]
Zaky.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
break
case 'ceksange':
case 'sangecek':
if (!isGroup) return reply(mess.only.group)
sange = body.slice(1)
const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const nge = sang[Math.floor(Math.random() * sang.length)]
Zaky.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
break
case 'cekgay':
case 'gaycek':
if (!isGroup) return reply(mess.only.group)
gayy = body.slice(1)
const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yag = gay[Math.floor(Math.random() * gay.length)]
Zaky.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
break
case 'gantengcek':
case 'cekganteng':
if (!isGroup) return reply(mess.only.group)
ganteng = body.slice(1)
const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const teng = gan[Math.floor(Math.random() * gan.length)]
Zaky.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
break
case 'cantikcek':
case 'cekcantik':
if (!isGroup) return reply(mess.only.group)
cantik = body.slice(1)
const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const tik = can[Math.floor(Math.random() * can.length)]
Zaky.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
break
case 'cekwatak':
case 'watakcek':
if (!isGroup) return reply(mess.only.group)
watak = body.slice(1)
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
Zaky.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
break
case 'cekhobby':
case 'hobbycek':
case 'cekhoby':
case 'hobycek':
if (!isGroup) return reply(mess.only.group)
hobby = body.slice(1)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
Zaky.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
break
case 'ceklesbi':
case 'lesbicek':
if (!isGroup) return reply(mess.only.group)
lesbii = body.slice(1)
const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
Zaky.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
break
case 'cekme':
case 'me':
if (!isGroup) return reply(mess.only.group)
reply("Tunggu!, Sedang Scan Number & Name")
neme = args.join(" ")
bet = `${sender}`
const sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
const hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
const wetak=['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const sipat = sifat[Math.floor(Math.random() * sifat.length)]
const biho = hoby[Math.floor(Math.random() * hoby.length)]
const bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
const senga = arp[Math.floor(Math.random() * arp.length)]
const chakep = cakep[Math.floor(Math.random() * cakep.length)]
const watak = wetak[Math.floor(Math.random() * wetak.length)]
const baik = baikk[Math.floor(Math.random() * baikk.length)]
const burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
const cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
const berani = berhani[Math.floor(Math.random() * berhani.length)]
const takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
try {
profil = await Zaky.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
profile = `*==== CEK @${bet.split('@')[0]} ====*

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%
*=================*`
buff = await getBuffer(profil)
Zaky.sendMessage(from, buff, image, {quoted: mek, caption: profile, contextInfo: { mentionedJid: [bet]}})
break
case 'cekmati':
case 'mati':
if (!isGroup) return reply(mess.only.group)
if (!q) return reply('Siapa namanya?')
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break


case 'beban':
if (!isGroup) return reply(mess.only.group)
membr = []
const ngee = groupMembers
const tod = groupMembers
const beb = ngee[Math.floor(Math.random() * ngee.length)]
const an = pushname[Math.floor(Math.random() * tod.length)]
teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
membr.push(beb.jid)
mentions(teks, membr, true)
break 
case 'babi':
if (!isGroup) return reply(mess.only.group)
membr = []
const meg = groupMembers
const mge = groupMembers
const ba = meg[Math.floor(Math.random() * meg.length)]
const bii = mge[Math.floor(Math.random() * mge.length)]
teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
membr.push(ba.jid)
mentions(teks, membr, true)
break
case 'ngewe':
if (!isGroup) return reply(mess.only.group)
jds = []
const jdiid = groupMembers
const kosst = groupMembers
const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
const diaat = kosst[Math.floor(Math.random() * kosst.length)]
teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]}`
jds.push(akuut.jid)
jds.push(diaat.jid)
mentions(teks, jds, true)
break
case 'sange':
if (!isGroup) return reply(mess.only.group)
membr = []
const pff = groupMembers
const go = groupMembers
const goo = pff[Math.floor(Math.random() * pff.length)]
const oe = go[Math.floor(Math.random() * go.length)]
teks = `*Yang Paling Sange Disini Adalah :* @${goo.jid.split('@')[0]}`
membr.push(goo.jid)
mentions(teks, membr, true)
break
case 'gay':
if (!isGroup) return reply(mess.only.group)
membr = []
const aa = groupMembers
const ab = groupMembers
const ac = aa[Math.floor(Math.random() * aa.length)]
const ad = ab[Math.floor(Math.random() * ab.length)]
teks = `*Yang Paling Gay Disini Adalah :* @${ac.jid.split('@')[0]}`
membr.push(ac.jid)
mentions(teks, membr, true)
break
case 'wibu':
if (!isGroup) return reply(mess.only.group)
membr = []
const baa = groupMembers
const bb = groupMembers
const bc = baa[Math.floor(Math.random() * baa.length)]
const bd = bb[Math.floor(Math.random() * bb.length)]
teks = `*Yang Paling Wibu Disini Adalah :* @${bc.jid.split('@')[0]}`
membr.push(bc.jid)
mentions(teks, membr, true)
break
case 'terganteng':
if (!isGroup) return reply(mess.only.group)
membr = []
const ca = groupMembers
const cb = groupMembers
const cc = ca[Math.floor(Math.random() * ca.length)]
const cd = cb[Math.floor(Math.random() * cb.length)]
teks = `*Yang Paling Wibu Disini Adalah :* @${cc.jid.split('@')[0]}`
membr.push(cc.jid)
mentions(teks, membr, true)
break
case 'tercantik':
if (!isGroup) return reply(mess.only.group)
membr = []
const da = groupMembers
const db = groupMembers
const dc = da[Math.floor(Math.random() * da.length)]
const dd = db[Math.floor(Math.random() * db.length)]
teks = `*Yang Paling Wibu Disini Adalah :* @${dc.jid.split('@')[0]}`
membr.push(dc.jid)
mentions(teks, membr, true)
break
case 'jadian':
if (!isGroup) return reply(mess.only.group)
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  ( ♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break
case 'suit':
if (!isGroup) return reply(mess.only.group)
text1 = `Silakan pilih salah satu untuk bermain suit`
text2 = `Semoga kakak menang`
but = [
{ buttonId: `${prefix}suit2 gunting`, buttonText: { displayText: '️GUNTING' }, type: 1 },
{ buttonId: `${prefix}suit2 kertas`, buttonText: { displayText: '️KERTAS️' }, type: 1 },
{ buttonId: `${prefix}suit2 batu`, buttonText: { displayText: '️BATU' }, type: 1 }
]
sendButMessage(from, text1, text2, but, {quoted: mek})
break
case 'suit2':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
"Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
//━━━━━━━━━━━━━━━[ FITUR KERANG ]━━━━━━━━━━━━━━━━━//
case 'apakah':
if (!isGroup) return reply(mess.only.group)
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Hmmm gimana ya']
const kah = apa[Math.floor(Math.random() * apa.length)]
Zaky.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
break
case 'kapankah':
if (!isGroup) return reply(mess.only.group)
kapankah = body.slice(1)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Zaky.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
break
case 'bisakah':
if (!isGroup) return reply(mess.only.group)
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Hmmm gimana ya','Gak bisa ajg awoakwok','mana mungkin su','Bisa banget tuh, keren kayaknya']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
Zaky.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
break
case 'bagaimanakah':
if (!isGroup) return reply(mess.only.group)
bagaimanakah = body.slice(1)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Hmmm gimana ya','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
Zaky.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
break
//━━━━━━━━━━━━━━━[ Jadi Bot]━━━━━━━━━━━━━━━━━//
case "jadibot":
          if (!isOwner && !mek.key.fromMe) return
          if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
          jadibot(reply, Zaky, from);
          break;
    case "stopjadibot":
          if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
          stopjadibot(reply);
          break;
    case "listbot":
          let tekss = "「 *LIST JADIBOT* 」\n";
          for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`;
          }
          reply(tekss);
          break
//━━━━━━━━━━━━━━━[ ALL MENU ]━━━━━━━━━━━━━━━━━//
case 'help':
case 'menu':
case 'menuall':
case 'allmenu':
menu =
`\`\`\`❏「 WAKTU INDONESIA 」\`\`\`
${gaya1} *Tanggal* : ${tanggal}
${gaya1} *Wib* : ${time}
${gaya1} *Wita* : ${timeMak}
${gaya1} *Wit* : ${timeJay}


\`\`\`❏「 INFO BOT 」\`\`\`
${gaya1} *Runtime* : ${runtime(process.uptime())}
${gaya1} *Nama Bot* : ${botname}
${gaya1} *Hostname :* ${os.hostname()}
${gaya1} *Platform :* ${os.platform()}
${gaya1} *Wa Version :* ${Zaky.user.phone.wa_version}
${gaya1} *prefix :* multi
${gaya1} *Mode :* ${self ? "Self" : "Public"}
${gaya1} *Autoread* : ${autoread ? "Aktif" : "Off"}
${gaya1} *Autoketik* : ${autoketik ? "Aktif" : "Off"}
${gaya1} *Autovn* : ${autovn ? "Aktif" : "Off"}


\`\`\`❏「 INFO USER 」\`\`\`
${gaya1} *Nama* : ${pushname}
${gaya1} *Bio* : ${bio_user}
${gaya1} *Nomor* : @${senderr.split('@')[0]}
${gaya1} *Status* : ${isOwner ? 'Owner' : 'User'}


*┏━━> 「 [💬]GROUP MENU 」*
${gaya2} ${prefix}antilink _on / off_
${gaya2} ${prefix}antivirtex _on / off_
${gaya2} ${prefix}welcome _on / off_
${gaya2} ${prefix}nsfw _on / off_
${gaya2} ${prefix}group _buka / tutup_
${gaya2} ${prefix}promote _@tag / reply_
${gaya2} ${prefix}demote _@tag / reply_
${gaya2} ${prefix}add _628xx_
${gaya2} ${prefix}kick _@tag / reply_
${gaya2} ${prefix}setpp _reply_
${gaya2} ${prefix}setdesc _teks_
${gaya2} ${prefix}setname _teks_
${gaya2} ${prefix}hidetag _teks_
${gaya2} ${prefix}kontak _628x|Nama_
${gaya2} ${prefix}kontag _@tag|Nama_
${gaya2} ${prefix}sticktag _Reply Sticker_
${gaya2} ${prefix}totag _Reply Image_
${gaya2} ${prefix}promoteall
${gaya2} ${prefix}demoteall
${gaya2} ${prefix}listadmin
${gaya2} ${prefix}grupowner
${gaya2} ${prefix}linkgrup
${gaya2} ${prefix}infogrup
${gaya2} ${prefix}listonline
${gaya2} ${prefix}resetlinkgrup
┗━━━━━━━━━━━>

*┏━━> 「 [📤]DOWNLOAD MENU 」*
${gaya2} ${prefix}ytmp3 _Link_
${gaya2} ${prefix}ytmp4 _Link_
${gaya2} ${prefix}tiktok _Link_
${gaya2} ${prefix}tiktokwm _Link_
${gaya2} ${prefix}tiktoknowm _Link_
${gaya2} ${prefix}tiktokaudio _Link_
┗━━━━━━━━━━━>

*┏━━> 「 [📝]MAKER MENU 」*
${gaya2} ${prefix}nulis _Teks_
${gaya2} ${prefix}nuliskiri _Teks_
${gaya2} ${prefix}nuliskanan _Teks_
${gaya2} ${prefix}foliokiri _Teks_
${gaya2} ${prefix}foliokanan _Teks_
${gaya2} ${prefix}blackpink _Teks_
${gaya2} ${prefix}halloween _Teks_
${gaya2} ${prefix}halloween2 _Teks_
${gaya2} ${prefix}3dgradient _Teks_
${gaya2} ${prefix}naturalleaves _Teks_
${gaya2} ${prefix}dropwater _Teks_
${gaya2} ${prefix}blood _Teks_
${gaya2} ${prefix}blood2 _Teks_
${gaya2} ${prefix}snow _Teks_
${gaya2} ${prefix}cloud _Teks_
${gaya2} ${prefix}neondevil _Teks_
${gaya2} ${prefix}neon _Teks_
${gaya2} ${prefix}glowingneonlight _Teks_
${gaya2} ${prefix}neonlight _Teks_
${gaya2} ${prefix}neonlight2 _Teks_
${gaya2} ${prefix}neonlight3 _Teks_
${gaya2} ${prefix}greenneon _Teks_
${gaya2} ${prefix}toxic _Teks_
${gaya2} ${prefix}matrix _Teks_
${gaya2} ${prefix}thunder _Teks_
${gaya2} ${prefix}thunder2 _Teks_
${gaya2} ${prefix}bokeh _Teks_
${gaya2} ${prefix}carbontext _Teks_
${gaya2} ${prefix}christmas _Teks_
${gaya2} ${prefix}breakwall _Teks_
${gaya2} ${prefix}roadwarning _Teks_
${gaya2} ${prefix}engraved3d _Teks_
${gaya2} ${prefix}embossed _Teks_
${gaya2} ${prefix}3dstone _Teks_
${gaya2} ${prefix}futuristic _Teks_
${gaya2} ${prefix}sketch _Teks_
${gaya2} ${prefix}bluecircuit _Teks_
${gaya2} ${prefix}space _Teks_
${gaya2} ${prefix}magmahot _Teks_
${gaya2} ${prefix}artpapercut _Teks_
${gaya2} ${prefix}3dluxurygold _Teks_
${gaya2} ${prefix}robotr2d2 _Teks_
${gaya2} ${prefix}harrypotter _Teks_
${gaya2} ${prefix}glitch3 _Teks_
${gaya2} ${prefix}greenhorror _Teks_
${gaya2} ${prefix}horrorgift _Teks_
${gaya2} ${prefix}erodedmetal _Teks_
${gaya2} ${prefix}3dglowingmetal _Teks_
${gaya2} ${prefix}blackmetal _Teks_
${gaya2} ${prefix}bluemetal _Teks_
${gaya2} ${prefix}shynimetal _Teks_
${gaya2} ${prefix}rustymetal _Teks_
${gaya2} ${prefix}metalpurple _Teks_
${gaya2} ${prefix}metalrainbow _Teks_
${gaya2} ${prefix}metaldarkgold _Teks_
${gaya2} ${prefix}colorfullluxurymetal _Teks_
${gaya2} ${prefix}glossybluemetal _Teks_
${gaya2} ${prefix}3dglossymetal _Teks_
${gaya2} ${prefix}3ddeepseametal _Teks_
${gaya2} ${prefix}leddisplayscreen _Teks_
${gaya2} ${prefix}metallic _Teks_
${gaya2} ${prefix}glossymetallic _Teks_
${gaya2} ${prefix}christmastree _Teks_
${gaya2} ${prefix}sparklesmerrychristmas _Teks_
${gaya2} ${prefix}countryflag3d _Teks_
${gaya2} ${prefix}americanflag3d _Teks_
${gaya2} ${prefix}3dscfi _Teks_
${gaya2} ${prefix}3drainbow _Teks_
${gaya2} ${prefix}3dwaterpipe _Teks_
${gaya2} ${prefix}3dchrome _Teks_
${gaya2} ${prefix}bluegem _Teks_
${gaya2} ${prefix}purplegem _Teks_
${gaya2} ${prefix}pinkcandy _Teks_
${gaya2} ${prefix}transformer _Teks_
${gaya2} ${prefix}berry _Teks_
${gaya2} ${prefix}brokenglass _Teks_
${gaya2} ${prefix}3drealistic _Teks_
${gaya2} ${prefix}3dunderwater _Teks_
${gaya2} ${prefix}writeinsandsummerbeach _Teks_
${gaya2} ${prefix}sandwriting _Teks_
${gaya2} ${prefix}foilballoon _Teks_
${gaya2} ${prefix}3dglue _Teks_
${gaya2} ${prefix}1917 _Teks_
${gaya2} ${prefix}minion _Teks_
${gaya2} ${prefix}doubleexposure _Teks_
${gaya2} ${prefix}holographic3d _Teks_
${gaya2} ${prefix}deluxegold _Teks_
${gaya2} ${prefix}deluxesilver _Teks_
${gaya2} ${prefix}glossycarbon _Teks_
${gaya2} ${prefix}fabric _Teks_
${gaya2} ${prefix}xmascards3d _Teks_
${gaya2} ${prefix}wicker _Teks_
${gaya2} ${prefix}fireworksparkle _Teks_
${gaya2} ${prefix}skeleton _Teks_
${gaya2} ${prefix}ultragloss _Teks_
${gaya2} ${prefix}denim _Teks_
${gaya2} ${prefix}decorategreen _Teks_
${gaya2} ${prefix}peridot _Teks_
${gaya2} ${prefix}rock _Teks_
${gaya2} ${prefix}lava _Teks_
${gaya2} ${prefix}rainbowequalizer _Teks_
${gaya2} ${prefix}purpleglass _Teks_
${gaya2} ${prefix}decorativeglass _Teks_
${gaya2} ${prefix}chocolatecake _Teks_
${gaya2} ${prefix}strawberry _Teks_
${gaya2} ${prefix}koifish _Teks_
${gaya2} ${prefix}bread _Teks_
${gaya2} ${prefix}3dbox _Teks_
${gaya2} ${prefix}freeadvancedglow _Teks_
${gaya2} ${prefix}honey _Teks_
${gaya2} ${prefix}marble _Teks_
${gaya2} ${prefix}marbleslabs _Teks_
${gaya2} ${prefix}icecold _Teks_
${gaya2} ${prefix}fruitjuice _Teks_
${gaya2} ${prefix}abstragold _Teks_
${gaya2} ${prefix}biscuit _Teks_
${gaya2} ${prefix}bagel _Teks_
${gaya2} ${prefix}wood _Teks_
${gaya2} ${prefix}hexagolden _Teks_
${gaya2} ${prefix}wonderfulgraffitiart _Teks_
${gaya2} ${prefix}8bit _Teks1&Teks2_
${gaya2} ${prefix}pornhub _Teks1&Teks2_
${gaya2} ${prefix}glitch _Teks1&Teks2_
${gaya2} ${prefix}glitch2 _Teks1&Teks2_
${gaya2} ${prefix}layered _Teks1&Teks2_
${gaya2} ${prefix}3dsteel _Teks1&Teks2_
${gaya2} ${prefix}realistic _Teks1&Teks2_
${gaya2} ${prefix}lionlogo _Teks1&Teks2_
${gaya2} ${prefix}ninjalogo _Teks1&Teks2_
${gaya2} ${prefix}wolf _Teks1&Teks2_
${gaya2} ${prefix}wolf2 _Teks1&Teks2_
${gaya2} ${prefix}halloween3 _Teks1&Teks2_
${gaya2} ${prefix}marvel _Teks1&Teks2_
${gaya2} ${prefix}marvel2 _Teks1&Teks2_
${gaya2} ${prefix}cinematichorror _Teks1&Teks2_
${gaya2} ${prefix}avengers _Teks1&Teks2_
${gaya2} ${prefix}graffiti3 _Teks1&Teks2_
${gaya2} ${prefix}captainamerica _Teks1&Teks2_
${gaya2} ${prefix}girlneko _Teks1&Teks2_
${gaya2} ${prefix}sadboy _Teks1&Teks2_
${gaya2} ${prefix}makerkaneki _Teks1&Teks2_
${gaya2} ${prefix}rem _Teks1&Teks2_
${gaya2} ${prefix}lolimaker _Teks1&Teks2_
${gaya2} ${prefix}gura _Teks1&Teks2_
┗━━━━━━━━━━━>

*┏━━> 「 [📃]RANDOM TEXT 」*
${gaya2} ${prefix}faktaunik
${gaya2} ${prefix}pantun
${gaya2} ${prefix}puisi
${gaya2} ${prefix}quotes
${gaya2} ${prefix}quoteskanye
${gaya2} ${prefix}quotesislami
${gaya2} ${prefix}quotesanime
${gaya2} ${prefix}quotesdilan
${gaya2} ${prefix}quotesff
${gaya2} ${prefix}quotespubg
${gaya2} ${prefix}quoteshacker
${gaya2} ${prefix}katabijak
${gaya2} ${prefix}katailham
${gaya2} ${prefix}katasindiran
${gaya2} ${prefix}katabucin
${gaya2} ${prefix}katabucin2
${gaya2} ${prefix}kataml
${gaya2} ${prefix}katagalau
${gaya2} ${prefix}katagombal
┗━━━━━━━━━━━>

*┏━━> 「 [🤖️]JADI BOT 」*
${gaya2} ${prefix}jadibot _(Hanya Owner)_
${gaya2} ${prefix}stopjadibot _(Hanya Owner)_
${gaya2} ${prefix}listbot _(Hanya Owner)_
┗━━━━━━━━━━━>

*┏━━> 「 [🖼️]RANDOM IMAGE 」*
${gaya2} ${prefix}ppcouple
${gaya2} ${prefix}meme
${gaya2} ${prefix}memeindo
${gaya2} ${prefix}quotesimage
${gaya2} ${prefix}katakataimage
${gaya2} ${prefix}renungan
${gaya2} ${prefix}darkjokes
${gaya2} ${prefix}aesthetic
${gaya2} ${prefix}wallpaperhacker
${gaya2} ${prefix}wallpaperhacker2
${gaya2} ${prefix}wallpaperharley
${gaya2} ${prefix}wallpaperjoker
${gaya2} ${prefix}wallpaperpubg
${gaya2} ${prefix}wallpaperhp
${gaya2} ${prefix}wallpaperhp2
${gaya2} ${prefix}wallpaperkpop
${gaya2} ${prefix}wallpaperblackpink
${gaya2} ${prefix}wallpapergame
┗━━━━━━━━━━━>

*┏━━> 「 [🎥]RANDOM VIDEO 」*
${gaya2} ${prefix}beatvn
${gaya2} ${prefix}jedagjedugff
${gaya2} ${prefix}jedagjedugml
${gaya2} ${prefix}jedagjedugpubg
${gaya2} ${prefix}storywa
${gaya2} ${prefix}storygalau
${gaya2} ${prefix}storytruk
${gaya2} ${prefix}storybus
${gaya2} ${prefix}storyanime
┗━━━━━━━━━━━>

*┏━━> 「 [🍑]ASUPAN MENU 」*
${gaya2} ${prefix}asupan
${gaya2} ${prefix}asupanloli
${gaya2} ${prefix}hijaber
${gaya2} ${prefix}bocil
${gaya2} ${prefix}rikagusriani
${gaya2} ${prefix}santuy
${gaya2} ${prefix}ukhty
${gaya2} ${prefix}gheayubi
${gaya2} ${prefix}nantalia
┗━━━━━━━━━━━>

*┏━━> 「 [🧕]CECAN MENU 」*
${gaya2} ${prefix}cogan
${gaya2} ${prefix}cecan
${gaya2} ${prefix}cecan2
${gaya2} ${prefix}cogan2
${gaya2} ${prefix}jeni
${gaya2} ${prefix}jiso
${gaya2} ${prefix}justina
${gaya2} ${prefix}lisa
${gaya2} ${prefix}rose
${gaya2} ${prefix}ryujin
${gaya2} ${prefix}china
${gaya2} ${prefix}vietnam
${gaya2} ${prefix}thainlad
${gaya2} ${prefix}indonesia
${gaya2} ${prefix}korea
${gaya2} ${prefix}japan
${gaya2} ${prefix}malaysia
┗━━━━━━━━━━━>

*┏━━> 「 [🈚]ANIME MENU 」*
${gaya2} ${prefix}naruto
${gaya2} ${prefix}loli
${gaya2} ${prefix}waifu
${gaya2} ${prefix}neko
${gaya2} ${prefix}husbu
${gaya2} ${prefix}milf
${gaya2} ${prefix}cosplay
${gaya2} ${prefix}nekonime
${gaya2} ${prefix}shota
${gaya2} ${prefix}wallml
${gaya2} ${prefix}akira
${gaya2} ${prefix}akiyama
${gaya2} ${prefix}ana
${gaya2} ${prefix}asuna
${gaya2} ${prefix}ayuzawa
${gaya2} ${prefix}boruto
${gaya2} ${prefix}chiho
${gaya2} ${prefix}chitoge
${gaya2} ${prefix}deidara
${gaya2} ${prefix}eba
${gaya2} ${prefix}elaina
${gaya2} ${prefix}emilia
${gaya2} ${prefix}erza
${gaya2} ${prefix}gremory
${gaya2} ${prefix}hestia
${gaya2} ${prefix}hinata
${gaya2} ${prefix}isuzu
${gaya2} ${prefix}itachi
${gaya2} ${prefix}itori
${gaya2} ${prefix}kagura
${gaya2} ${prefix}kakasih
${gaya2} ${prefix}kaori
${gaya2} ${prefix}kaneki
${gaya2} ${prefix}kotori
${gaya2} ${prefix}kurumi
${gaya2} ${prefix}madara
${gaya2} ${prefix}mikasa
${gaya2} ${prefix}miku
${gaya2} ${prefix}minato
${gaya2} ${prefix}nezuko
${gaya2} ${prefix}rize
${gaya2} ${prefix}sagiri
${gaya2} ${prefix}sakura
${gaya2} ${prefix}sasuke
${gaya2} ${prefix}shina
${gaya2} ${prefix}shinka
${gaya2} ${prefix}shinomiya
${gaya2} ${prefix}shizuka
${gaya2} ${prefix}tejina
${gaya2} ${prefix}toukachan
${gaya2} ${prefix}tsunade
${gaya2} ${prefix}yotsuba
${gaya2} ${prefix}yuki
${gaya2} ${prefix}yumeko
${gaya2} ${prefix}fanart
${gaya2} ${prefix}nino
┗━━━━━━━━━━━>

*┏━━> 「 [🔞]NSFW MENU 」*
${gaya2} ${prefix}ass
${gaya2} ${prefix}ahegao
${gaya2} ${prefix}bdsm
${gaya2} ${prefix}blowjob
${gaya2} ${prefix}cuckold
${gaya2} ${prefix}cum
${gaya2} ${prefix}ero
${gaya2} ${prefix}femdom
${gaya2} ${prefix}foot
${gaya2} ${prefix}gangbang
${gaya2} ${prefix}glasses
${gaya2} ${prefix}hentai
${gaya2} ${prefix}jahy
${gaya2} ${prefix}masturbation
${gaya2} ${prefix}neko
${gaya2} ${prefix}orgy
${gaya2} ${prefix}panties
${gaya2} ${prefix}pussy
${gaya2} ${prefix}thighs
${gaya2} ${prefix}yuri
┗━━━━━━━━━━━>

*┏━━> 「 [🎀]STICKER MENU 」*
${gaya2} ${prefix}sticker _reply_
${gaya2} ${prefix}toimg _reply_
${gaya2} ${prefix}smeme Atas|Bawah
┗━━━━━━━━━━━>

*┏━━> 「 [🎮]GAME MENU 」*
${gaya2} ${prefix}truth
${gaya2} ${prefix}dare
${gaya2} ${prefix}terganteng
${gaya2} ${prefix}terjelek
${gaya2} ${prefix}tercantik
${gaya2} ${prefix}tergay
${gaya2} ${prefix}terpedo
${gaya2} ${prefix}terwibu
${gaya2} ${prefix}jadian
${gaya2} ${prefix}ngewe
┗━━━━━━━━━━━>

*┏━━>「 [🐚]KERANG MENU 」*
${gaya2} ${prefix}apakah _Teks_
${gaya2} ${prefix}kapankah _Teks_
${gaya2} ${prefix}bisakah _Teks_
${gaya2} ${prefix}bagaimanakah _Teks_
┗━━━━━━━━━━━>

*┏━━>「 [🎮]FUN MENU 」*
${gaya2} ${prefix}suit
${gaya2} ${prefix}cekme
${gaya2} ${prefix}beban
${gaya2} ${prefix}babi
${gaya2} ${prefix}ngewe
${gaya2} ${prefix}sange
${gaya2} ${prefix}gay
${gaya2} ${prefix}wibu
${gaya2} ${prefix}terganteng
${gaya2} ${prefix}tercantik
${gaya2} ${prefix}jadian
${gaya2} ${prefix}rate _Teks_
${gaya2} ${prefix}ceksange _Teks_
${gaya2} ${prefix}cekgay _Teks_
${gaya2} ${prefix}cekganteng _Teks_
${gaya2} ${prefix}cekcantik _Teks_
${gaya2} ${prefix}cekmati _Teks_
${gaya2} ${prefix}cekwatak _Teks_
${gaya2} ${prefix}cekhobby _Teks_
${gaya2} ${prefix}ceklesbi _Teks_
┗━━━━━━━━━━━>

*┏━━> 「 [🏷️]OTHER MENU 」*
${gaya2} ${prefix}runtime
${gaya2} ${prefix}speed
${gaya2} ${prefix}sewabot
${gaya2} ${prefix}payment
${gaya2} ${prefix}owner
${gaya2} ${prefix}sc
${gaya2} ${prefix}infosc
${gaya2} ${prefix}ssweb _Url_
${gaya2} ${prefix}delete _Reply pesan bot_
┗━━━━━━━━━━━>

*┏━━> 「 [👤]OWNER MENU 」*
${gaya2} ${prefix}bc _Teks_
${gaya2} ${prefix}bcnowm _Teks_
${gaya2} ${prefix}bc2 _Teks_
${gaya2} ${prefix}bcgc _Teks_
${gaya2} ${prefix}setnamabot _Teks_
${gaya2} ${prefix}setbio _Teks_
${gaya2} ${prefix}setppbot _Reply Image_
${gaya2} ${prefix}autoread _On / Off_
${gaya2} ${prefix}autoketik _On / Off_
${gaya2} ${prefix}autovn _On / Off_
${gaya2} ${prefix}clearall
${gaya2} ${prefix}public
${gaya2} ${prefix}self
┗━━━━━━━━━━━>`
teks =
`_Beri Jeda Bot Selama 5Detik_`
Zaky.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`,footerText: `${teks}`, buttons: [{ buttonId: `${prefix}sewa`, buttonText: { displayText: '[💸]Sewa' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '[💰]DONASI' }, type: 1 },{ buttonId: `${prefix}command`, buttonText: { displayText: '[🚧] COMMAND' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
const sound = fs.readFileSync('./media/audio.mp3')
Zaky.sendMessage(from, sound, audio, { mimetype: 'audio/mp4', ptt: true })
break


//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
            case 'leave': {
                if (!isOwner && !mek.key.fromMe) return
                await Zaky.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
case 'nulis':
reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
break
case 'nuliskiri':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
'./media/nulis/images/buku/sebelumkiri.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'22',
'-interline-spacing',
'2',
'-annotate',
'+140+153',
fixHeight,
'./media/nulis/images/buku/setelahkiri.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Zaky.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break
case 'nuliskanan':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
'./media/nulis/images/buku/sebelumkanan.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'23',
'-interline-spacing',
'2',
'-annotate',
'+128+129',
fixHeight,
'./media/nulis/images/buku/setelahkanan.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Zaky.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break
case 'foliokiri':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
'./media/nulis/images/folio/sebelumkiri.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'1720x1280',
'-pointsize',
'23',
'-interline-spacing',
'4',
'-annotate',
'+48+185',
fixHeight,
'./media/nulis/images/folio/setelahkiri.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Zaky.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break
case 'foliokanan':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
'./media/nulis/images/folio/sebelumkanan.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'23',
'-interline-spacing',
'3',
'-annotate',
'+89+190',
fixHeight,
'./media/nulis/images/folio/setelahkanan.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Zaky.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break
//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//

default:
if (budy.includes(`${owner}`)) {
menu = `Ada Perlu Apa Dengan OwnerKu?`
reply(menu)
}
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
	Zaky.sendMessage(`${owner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer ZakyGans",body:"Jangan Lupa Follow Tik Tok Upin6860",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/Zaky.jpg'),sourceUrl:"https://wa.me/62858779027560"}}})
        }
	// console.log(e)
	}
}


	
    
