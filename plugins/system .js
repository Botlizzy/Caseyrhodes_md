const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check up time,ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = '*uptime: *  ${runtime(process.uptime())}
'*Ram usage:* ${(progress.memoryusage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${math.round(require('os').totalmem / 1024 / 1024)}MB
'*Hostname:* ${os.hostname()}
'*owner:* caseyrhodes & caseyweb'
  .
 return reply('${status}')
  
}catch(e){
console.log(e)
reply('${e}') 

}
})


    
