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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_42_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NixcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI4LFxuICAgICAgICA5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMixcbiAgICAgICAgMTYyLFxuICAgICAgICA2MyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICA5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgMjU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImxhYUsxR0hqWmNyTFpOUnJEeUNEbndaeVI5M3lXYnpDNUJCbkhJZjNHNEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI1NTUyMzY3MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY5RDBCOEU0NEZCNEM2MTVGQTlBM0YyNzE1MjU0NTREXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTQxNTM1MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzV3dMQlFWSFRKZVFGRTJZWlVvN3pBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI0MTQxODdhLWZmYzktNDQ5My1hMWI5LTdiMzhkYjQ3OWQ3NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAyNDIsXG4gICAgICAxMDgsXG4gICAgICAzNixcbiAgICAgIDEyNixcbiAgICAgIDc4LFxuICAgICAgMTE3LFxuICAgICAgMTk5LFxuICAgICAgMTA3LFxuICAgICAgMTg5LFxuICAgICAgOSxcbiAgICAgIDI0OSxcbiAgICAgIDk0LFxuICAgICAgMjQ3LFxuICAgICAgMTc0LFxuICAgICAgNTQsXG4gICAgICAyNTAsXG4gICAgICAyMTksXG4gICAgICAzNyxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDQzLFxuICAgICAgMTgxLFxuICAgICAgNzAsXG4gICAgICAxMDcsXG4gICAgICAyMTIsXG4gICAgICAzOSxcbiAgICAgIDI0NixcbiAgICAgIDI0MCxcbiAgICAgIDg2LFxuICAgICAgMTU0LFxuICAgICAgMTk3LFxuICAgICAgMjMwLFxuICAgICAgMjEwLFxuICAgICAgODEsXG4gICAgICAxMTAsXG4gICAgICAxMjYsXG4gICAgICAyNSxcbiAgICAgIDE3OCxcbiAgICAgIDExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhSOFk3V0ZKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU1NTIzNjczMDo4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzA1MjU3MTIzNDUyMTo4NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZTZ3TnNIRUs2YXpia0dHQk1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRsSFFkTS82V0szbnVzSnRtbGJKMk82MkpJdVVWYzFMUzVrSUREMkdTVnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVU9YMHpnYytMYUJDZEFlS2tnYUJtZ1BsbFRyblJJLzQ0dFZ0WEtVcFNKRFUxQ1RRS2hwb3FVam5vdHppSFJZVjlvT21PZFdPQm91bHlMejc1dG1iQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ0NlZ2VYRTEwZWJyR2VaQXlXdlJMejVoVW1HbENyL1BpcEZNQlN6anVsQXRPSWU3ZEVHdUgxZUtla05pd3VKUzNZbGErbTZpTGx6T0dpdU5peWZZRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NTUyMzY3MzA6ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTQxNTM0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI3T1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjdPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN1YySkFvVDl1M1M2aE9hTXIrUHR3a1lTb25Fa1hDem1SZ1ZoN1l1eEs0az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDcwOTQ1MDYzLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
