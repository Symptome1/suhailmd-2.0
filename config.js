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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_37_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk5LFxuICAgICAgICA4NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzLFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzLFxuICAgICAgICA0NixcbiAgICAgICAgODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcwLFxuICAgICAgICA0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAzNixcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDksXG4gICAgICAgIDYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRFSmhoNEE4QmtJOEYvQ0JObTVZeXZYNnA3Wk52eWMxSk5GSXArSXF0L0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVtRW9UVVpqU2hPNU5OaUdTcHFpa1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWQyYWIyZDItYWM2Ni00ZWRjLTk4MGItNDMwYzg2OWRlYWQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDM5LFxuICAgICAgMTM1LFxuICAgICAgOTAsXG4gICAgICAxMTAsXG4gICAgICAyMzMsXG4gICAgICAyMyxcbiAgICAgIDE1NixcbiAgICAgIDIzMyxcbiAgICAgIDk3LFxuICAgICAgNDYsXG4gICAgICAxODEsXG4gICAgICAyNTQsXG4gICAgICAzNCxcbiAgICAgIDE1MyxcbiAgICAgIDE2MCxcbiAgICAgIDEyMCxcbiAgICAgIDY2LFxuICAgICAgMjQ0LFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgMTc4LFxuICAgICAgMzIsXG4gICAgICA1NixcbiAgICAgIDI0NSxcbiAgICAgIDg0LFxuICAgICAgOSxcbiAgICAgIDE4OSxcbiAgICAgIDE2NSxcbiAgICAgIDEwLFxuICAgICAgMjQ1LFxuICAgICAgMjA0LFxuICAgICAgMjMwLFxuICAgICAgMTUsXG4gICAgICAxOTEsXG4gICAgICA3MCxcbiAgICAgIDE5NixcbiAgICAgIDkwLFxuICAgICAgMjA0LFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk0yN0RSTDlHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU1NTIzNjczMDo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzA1MjU3MTIzNDUyMTo5M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLMjZ3TnNIRUlDSHA3b0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRsSFFkTS82V0szbnVzSnRtbGJKMk82MkpJdVVWYzFMUzVrSUREMkdTVnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWEhYV2lsK0s5R0Z1Z2ZOV2RWOHlNZU9PU2cyOWpnWHRuNExKekdwU01OcXFaQ1dLdVpHNHNaMWZDeVM1Sk1KNEdvam1zS0lzcTAzYXFnSzg5ZlFpQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaWh2TjkzR0VNSkJGVzlhM0ttY2RJczB1ZVAvRmwyMTQ5c3dhVkgwVEpqUGpQUWF2cXRrcUI3akd3ZjZJY2xJTVFXZEdvYXBUbjE0bHp3U1U3U1VMZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NTUyMzY3MzA6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjg4NzQyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBEclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUERyLmpzb24iOiAie1wia2V5RGF0YVwiOlwibzUvZU1VbUVHQnU0Sm1hdHMzcCtEMEFQcW9GTGUwR3VYdGp2aXNUY0lHND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDcwOTQ1MDY5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI4ODcwNjQ1MzBcIn0iCn0="  // PUT your SESSION_ID 


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
