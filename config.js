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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_04_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDY5LFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDgxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MSxcbiAgICAgICAgNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM4LFxuICAgICAgICA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzksXG4gICAgICAgIDE2LFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc2LFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInQrZ1FVTHVMdUxDMURHQXpMa1ZNRDJXVnJqN1U2UmNVbjlEdTE0cUUvaWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI1NTUyMzY3MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY2MTM4NzhFMzRGRDE4N0EyMjgzOEI4MUEzQzNCMzlEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjI2MjY5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTU1MjM2NzMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NTQxN0NBQTE0NENGN0M5RkMzMTkzRjhDMjQyNzYxNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIyNjI2OTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLU53aEp5b0ZRWmk0RjI1UFFTSTIzZ1wiLFxuICBcInBob25lSWRcIjogXCJhZjE2OGMxYi05MDlmLTQwNjMtODJhYS0zN2YwZDBjYjZjN2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICAxLFxuICAgICAgMTgwLFxuICAgICAgMzQsXG4gICAgICA2MSxcbiAgICAgIDE2LFxuICAgICAgMTI0LFxuICAgICAgNTEsXG4gICAgICAxMixcbiAgICAgIDM5LFxuICAgICAgMjQxLFxuICAgICAgMjA1LFxuICAgICAgMTY0LFxuICAgICAgMTgyLFxuICAgICAgMjAyLFxuICAgICAgMTc3LFxuICAgICAgMTc2LFxuICAgICAgMTk1LFxuICAgICAgNzYsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAxNTksXG4gICAgICAyMjMsXG4gICAgICAyMzAsXG4gICAgICA2MCxcbiAgICAgIDE0MSxcbiAgICAgIDcxLFxuICAgICAgMTIwLFxuICAgICAgMjMsXG4gICAgICAxMjIsXG4gICAgICA1LFxuICAgICAgMTg0LFxuICAgICAgODcsXG4gICAgICAxNzUsXG4gICAgICAzMCxcbiAgICAgIDExMixcbiAgICAgIDEyMCxcbiAgICAgIDEyOCxcbiAgICAgIDIzOSxcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGQ1pCTjdHUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1NTUyMzY3MzA6OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcwNTI1NzEyMzQ1MjE6OTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwieuKCkeKCnOKCm+G1pFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0syNndOc0hFS0QyZ0xvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidGxIUWRNLzZXSzNudXNKdG1sYkoyTzYySkl1VVZjMUxTNWtJREQyR1NWcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmOFBnb2QxdEJWTjhVSWRQMVBreVFJQnVZTnBKL01IMUVvTXB5L2Z6b3FFaXdDT25lQ3hWSmVVdzdQODhUU1dyS3R2THp5RFFvbkUya3U4bGNnUjNDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqc1F2bS9mZHJNVlZ6WFZSVnE3VUNNZDdIeFV4bktDaWsvTHpmcThFL2FmVGtOYm94WVRoMGlDKytiN3pNRG5PQkVWTHlDTi9oV1JmVFo5d3hjejNpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU1NTIzNjczMDo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMjYyNjkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUERxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQRHEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwaENJeW1mazhEVmdlNDlqczkxQlRPMzdKVElraG54Slo3VVNnb1hLOGJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzA5NDUwNjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjI2MjY5NDk4MlwifSIKfQ=="  // PUT your SESSION_ID 


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
