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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22555236730";




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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_18_12_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNixcbiAgICAgICAgMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICA5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQxLFxuICAgICAgICA0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NixcbiAgICAgICAgMTA0LFxuICAgICAgICA3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAzOSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPK0ZOT000Ry9SeUFrNENwNHpvUlpxbmhhWFVTeEJaSEpHYmZmMDduSEVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTU1MjM2NzMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTFENTExQzk3ODM1MEU3RUU0NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQzOTgyNzhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMWJySExuSnVURE9oV0NtX2U0eWhvUVwiLFxuICBcInBob25lSWRcIjogXCI3OTZmY2M1NC1lMjU3LTRmZGEtYjg2ZC0xN2M2YWZiNTVmOTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMjE3LFxuICAgICAgMjgsXG4gICAgICAyMDMsXG4gICAgICA0MixcbiAgICAgIDEyLFxuICAgICAgMTEzLFxuICAgICAgODQsXG4gICAgICAyMjMsXG4gICAgICAyMTUsXG4gICAgICAyMTcsXG4gICAgICA4OCxcbiAgICAgIDEyMixcbiAgICAgIDEsXG4gICAgICAxMjQsXG4gICAgICAzOCxcbiAgICAgIDIwNSxcbiAgICAgIDExNSxcbiAgICAgIDgxLFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICAxMjUsXG4gICAgICAyNSxcbiAgICAgIDExNixcbiAgICAgIDIyLFxuICAgICAgMTAxLFxuICAgICAgMTA3LFxuICAgICAgMTQ3LFxuICAgICAgMTY2LFxuICAgICAgMTM0LFxuICAgICAgMTQ3LFxuICAgICAgMTMxLFxuICAgICAgMjAyLFxuICAgICAgOTYsXG4gICAgICAxODgsXG4gICAgICAxMDYsXG4gICAgICAxNzUsXG4gICAgICA0OSxcbiAgICAgIDIyMCxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t1Lytmc1BFTUNpZzdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVXZQbDFWd2taMU5LdWZTWC95aTdpQ1FWdVU0SzZ6dnJsSlR5UUh5U2lRQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVNDVvTUlkSEJUbGx0V2Z6QTYxNmhaektHektucWkyRVY3bUZNR2lBb0tKanpxSStBMk13bk1HVjdka0o5dkpCZ0JPWXFxbFl1dEhGMm1BeFFEeDloZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrb3RYb2gwN2ovU2dsZHpoeG40SVFYcW1WU3pQL21qbHdpbHpLSTlSaVlvWXpFR2pjRWFmZXpJWVVvMEhaQzFHVHRsVlJUUVBhS09NREdXbjFwMVVpdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTU1MjM2NzMwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcwNTI1NzEyMzQ1MjE6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJUb2J5XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU1NTIzNjczMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0Mzk4Mjc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWd2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZ3YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZcklZeSt1b2VLREF5Nk9kdzQ1ZDlKS1dHRk1XeXJCYlJ5TzVDTEtrZ2gwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyODY0NzIxMDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDM5ODI3NDU1N1wifSIKfQ=="
  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "tobi",
  packname: process.env.PACK_NAME || "tobi",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "tobi",


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
