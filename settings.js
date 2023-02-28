const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//𝗼𝘄𝗻𝗲𝗿 𝘃 𝗰𝗮𝗿𝗱 𝗽𝗵𝗼𝗻𝗲 𝗻𝘂𝗺𝗯𝗲𝗿
global.owner = ['94719225807'] //ur owner number

//𝗢𝗪𝗡𝗘𝗥 𝗡𝗔𝗠𝗘👇🚀
global.ownername = "Yuresh Kavindu" //ur owner name

//𝗬𝗢𝗨𝗥 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗟𝗜𝗡𝗞🚀👇
global.ytname = "𝗬𝗢𝗨 𝗟𝗜𝗡𝗞" //ur yt chanel name


global.socialm = "X TROID" //ur github or insta name
global.location = "Sri Lanka, Colombo, Kurunegala" //ur location

//▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕
//⛔𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗜𝗗 𝗖𝗢𝗥𝗗 𝗤𝗥👇 𝗣𝗟𝗘𝗦𝗘 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗜𝗗🚀 𝗫 𝗧𝗥𝗢𝗜𝗗

global.session = "OG1hOUx4ZUg=" //⛔⛔session Id ඔයාලගෙ ස්කැන් කරපුහම එන කොඩ් එක ඔකට දාන්න.

//𝗣𝗟𝗘𝗦𝗘 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗜𝗗🚀 𝗫 𝗧𝗥𝗢𝗜𝗗  𝗣𝗟𝗘𝗦𝗘 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗜𝗗🚀 𝗫 𝗧𝗥𝗢𝗜𝗗
//▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕

//𝗢𝗪𝗡𝗘𝗥 𝗡𝗨𝗠𝗕𝗘𝗥👇
global.ownernomer = "94719225807" //ur number
global.premium = ['94719225807'] //ur premium number

//𝗕𝗢𝗧 𝗡𝗔𝗠𝗘👇
global.botname = 'X TROID' //ur bot name

//𝗬𝗢𝗨𝗥 𝗚𝗥𝗢𝗨𝗣 𝗔𝗡𝗗 𝗪𝗘𝗕 𝗟𝗜𝗡𝗞👇
global.linkz = "https://chat.whatsapp.com/Fd5MPEBn7NQ1aviL4V5fa7" //your theme url which will be displayed on whatsapp
global.websitex = "https://chat.whatsapp.com/Fd5MPEBn7NQ1aviL4V5fa7" //ur website to be displayed
global.botscript = 'https://github.com/yureshofficial/X-Troid' //script link
global.themeemoji = "🛸" //ur theme emoji
//𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗡𝗔𝗠𝗘👇
global.packname = "x -ᴛʀᴏɪᴅ" //ur sticker watermark packname
global.author = "ᴜꜱᴇʀ ᴡʜ-ʙᴏᴛ" //ur sticker watermark author

//𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 👇
global.wm = "x -ᴛʀᴏɪᴅ 
ᴜꜱᴇʀ ᴡʜ-ʙᴏᴛ" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: '*💭Here you go!*',
    admin: '*💭This feature could be used by admins only!*',
    botAdmin: '*💭Bot Must Be Admin First!*',
    premime: '*💭Premium Special Features If You Want to Register Type Rent*',
    owner: '*💭This feature could be used by owner only*',
    group: '*💭Features Used Only For Groups!*',
    private: '*💭Features Used Only For Private Chat!*',
    bot: '*💭This feature could be used by bot only*',
    wait: '*💭Please wait...*',
    linkm: '*💭Where is the link?*',
    endLimit: '*💭Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours*',
    nsfw: '*💭The nsfw feature has not been activated, please contact the admin to activate*',
}

//media target
global.thum = fs.readFileSync("./XtroidGallery/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XtroidGallery/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XtroidGallery/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XtroidGallery/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
