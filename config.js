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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_17_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODksXG4gICAgICAgIDc4LFxuICAgICAgICAyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NixcbiAgICAgICAgOTMsXG4gICAgICAgIDI5LFxuICAgICAgICA0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICA5NixcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcwLFxuICAgICAgICA3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkR4UmtxL2prVE9ZeWd5UFgyVk5PUDZUZ25rdHlLSEhRRCtVNS9vYUUwT2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI1NTUyMzY3MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBREYzQjE4NDExN0JDRkU2Rjk3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDkyMDIyMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGVWxKTWlsdVNYUzVLUEdvcG51QUdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlkYzQ2ZjRmLWY2MGUtNGUyMy1iNDA3LWE4ZWE1YzcyNjAyM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAyNDEsXG4gICAgICA1NyxcbiAgICAgIDQzLFxuICAgICAgMTU0LFxuICAgICAgMzUsXG4gICAgICAyMTIsXG4gICAgICAyMjMsXG4gICAgICA2OCxcbiAgICAgIDIyMyxcbiAgICAgIDEwNyxcbiAgICAgIDY5LFxuICAgICAgNTMsXG4gICAgICA0OCxcbiAgICAgIDE5NSxcbiAgICAgIDE1MCxcbiAgICAgIDM1LFxuICAgICAgMTY0LFxuICAgICAgOCxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICA2MCxcbiAgICAgIDEzOCxcbiAgICAgIDE3NyxcbiAgICAgIDg2LFxuICAgICAgMjQzLFxuICAgICAgMTk3LFxuICAgICAgMTY0LFxuICAgICAgMjQ1LFxuICAgICAgMTIxLFxuICAgICAgMTAzLFxuICAgICAgMCxcbiAgICAgIDcxLFxuICAgICAgMTMxLFxuICAgICAgMjIzLFxuICAgICAgMTc2LFxuICAgICAgMTY2LFxuICAgICAgMjM2LFxuICAgICAgMjUyLFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3UvK2ZzUEVKYVFvN3NHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVdlBsMVZ3a1oxTkt1ZlNYL3lpN2lDUVZ1VTRLNnp2cmxKVHlRSHlTaVFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJPNmE5ZVFtTm9TaVdGQzdOUEZrUVpRalEzMk1FTlNXNVpPS1J4TWNhWkV4aTRhb0g0SFRmS2NRWFUzVFplR1ZEYU8rSld6aVpjM1RieEtEbmFWSWdBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImt2UU1hckxDUE9neVBYTEp4T0NMMit3TU9vUHhkS1B5VW5SbU81OEpmZ3A0TDMwOEthU2dVOVByVmVUQjZTcTJJOTlZZ3J3Zi8rUlF0Z1RtZzV5K0JRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1NTUyMzY3MzA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzA1MjU3MTIzNDUyMTo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkpheVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NTUyMzY3MzA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDkyMDIxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlneFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWcwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ25TMU1IV3RoWm1nUU1KYjBqZ0g2Ry82Mi9EZmRjMTRRcU92YXQzTGc1QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mjg2NDcyMTA3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMywyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDkyMDE2MTYzNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlnMS5qc29uIjogIntcImtleURhdGFcIjpcInRaQkVBeFozSXcvRFl6ZXZSaFJNaEpLZXZVRHV0Qno1L1MyL1lHTWNOMUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDI4NjQ3MjEwNyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzIsMF19LFwidGltZXN0YW1wXCI6XCIxNzM0OTIwMTYzNTk1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWd2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWXJJWXkrdW9lS0RBeTZPZHc0NWQ5SktXR0ZNV3lyQmJSeU81Q0xLa2doMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mjg2NDcyMTA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQzOTgyNzQ1NTdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZ3guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNLzYzRTh4VDBZUDlrcVJMaUJnYXFpaFdxbFVRWkFPVGorV2FBazk4VEg4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyODY0NzIxMDcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDAsMl19LFwidGltZXN0YW1wXCI6XCIxNzM0OTE5OTc5NTQ0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWd5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiOWp3cGV0eDJSeUM5bnE0b2JWdTZyN0J6Q2Q2Z2JIYzNQNnhGbk5LNTFQZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mjg2NDcyMTA3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ5MTk5ODA4MjZcIn0iCn0="
  

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
