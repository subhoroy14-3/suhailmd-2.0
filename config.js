const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_54_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1LFxuICAgICAgICA4LFxuICAgICAgICA2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDUwLFxuICAgICAgICAyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkwLFxuICAgICAgICA4MixcbiAgICAgICAgNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRaEhzckhyRUViM2szcEh5MmFCanJ1c2hDc3V2Zmk0ck92L3J3QmljampNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODk0NTk5OTY1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUJBMUQwNzA2MkZGQjAyQjkxMjE2ODExRERGNjAxNzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMDM1MjY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4OTQ1OTk5NjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NzU0QTM4RTVEN0Y0QTc2Mzk0MUNFMDQyQjhFNUNDNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIwMzUyNjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiazR3cHlMai1UWlNSWnJrZlBVODN4UVwiLFxuICBcInBob25lSWRcIjogXCI0ZDEyMzhkZi01YzA5LTRkNDctODkwZi03OWJjMDkzMDNhYjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAyNDQsXG4gICAgICA0OCxcbiAgICAgIDIxLFxuICAgICAgMTMyLFxuICAgICAgNDMsXG4gICAgICAzOCxcbiAgICAgIDcsXG4gICAgICAzNSxcbiAgICAgIDIyLFxuICAgICAgOTIsXG4gICAgICAxOTUsXG4gICAgICAxOTAsXG4gICAgICAyMjksXG4gICAgICAyMDYsXG4gICAgICAxNDIsXG4gICAgICAyNTIsXG4gICAgICA4OCxcbiAgICAgIDEyNixcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAyMzQsXG4gICAgICA4NyxcbiAgICAgIDEyNyxcbiAgICAgIDEwOCxcbiAgICAgIDIwMSxcbiAgICAgIDEwMSxcbiAgICAgIDEwMSxcbiAgICAgIDIyMixcbiAgICAgIDE0NCxcbiAgICAgIDIyNCxcbiAgICAgIDE1NCxcbiAgICAgIDI0MSxcbiAgICAgIDI1LFxuICAgICAgOTUsXG4gICAgICAxMjcsXG4gICAgICAxNjgsXG4gICAgICA1MyxcbiAgICAgIDE5MixcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJORjdIWDNMUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4OTQ1OTk5NjU1OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU3ViaG9cIixcbiAgICBcImxpZFwiOiBcIjMyMDU4MTcyODEzMzEzOjU2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0sydHFwWUhFTHFGODdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwielZmZ01NN25UMGxBYTNrRHp4Q3N2azFrU082alk5WlE1czBvY3BnVFoyaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5UEplSW9GSTdBVDVTNzVZb3NaU2NPc2lBRStNQmQ1V0QxelR1YXk1K1A1QTl6RDJYY0JCaFFpckp6SUFmTXE1cnF5RWh6SUNSdXNPMURKckVKbzhDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4N0VMSUZvV0VzVUNoSVpxdTVlaytac2pLUGJHUDV2aWpRZ2lmSnFkOURxQjZjajRTRjFmNE1jOTRjTml5UTNlTmh4SkVnUE54d2xCTkNXSkh2OStndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg5NDU5OTk2NTU6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMDM1MjYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2k1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPaTUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZREdJcElFeU9uRklJM2Q5NGF1czlWd0xvbCtKMUlBUG4xRERSd3ZmU3c4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MjU4Nzk0NjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjAzNTI2NDg1NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
