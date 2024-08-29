const {cmd , commands} = require('../command')
const fg = require('api-dynux')
const yts = require('yts-search')


cmd({
    pattern: "somg",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url 

let desk = '
  🌟*CASEYRHODES_MD*🌟

tittle: ${data.tittle}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

CREATED BY CASEYRHODES🌟
.
await conn.sendeMessage(from,{image:{url data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message 
await conn.sendMessage(from,{audio: {url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadurl},mimetype:"audio/mpeg",fileName:data.tittle + ".mp3",caption:"MADE BY CASEYRHODES ❤️"},{quoted:mek})

    


}catch(e){
comsole.log(e)
reply('${e}')
}
}) 

//============video-dl============

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url 

let desk = '
  🌟*CASEYRHODES_MD*🌟

tittle: ${data.tittle}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

CREATED BY CASEYRHODES🌟
.
await conn.sendeMessage(from,{image:{url data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send audio + document message 
await conn.sendMessage(from,{video: {url:downloadurl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadurl},mimetype:"video/mp4",fileName:data.tittle + ".mp4",caption:"MADE BY CASEYRHODES🌟"},{quoted:mek})




}catch(e){
comsole.log(e)
reply('${e}')
}
})
