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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_08_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDk0LFxuICAgICAgICA3MixcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDY0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDUzLFxuICAgICAgICA1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MCxcbiAgICAgICAgMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDczLFxuICAgICAgICA5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicVVuM3IvMUdFUmVjYUlRWThLd2c2WXNqZ0JNeTg2YjFrUFlNNGVka094VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjU1NTIzNjczMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUE0QTIzN0E0NDVGMDAwNUJEOTYyM0E0NDA4RkU1QTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNjM1NzIwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm55SXFWYnhaUTdpZUVMbHFNNldjdndcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTA4M2Q5OTMtMjVlYS00MDYzLWFmZTQtZDA1ZDJjZjUyNjYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDM1LFxuICAgICAgODAsXG4gICAgICAxMzIsXG4gICAgICAyMzAsXG4gICAgICAxODcsXG4gICAgICAxMTQsXG4gICAgICAxNCxcbiAgICAgIDE3OSxcbiAgICAgIDgwLFxuICAgICAgMzcsXG4gICAgICAxNDEsXG4gICAgICAyMjcsXG4gICAgICA0NyxcbiAgICAgIDIzLFxuICAgICAgMTA4LFxuICAgICAgNjYsXG4gICAgICAxOTEsXG4gICAgICAxMzcsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICAyNDIsXG4gICAgICAyMjEsXG4gICAgICAxMjEsXG4gICAgICA1OSxcbiAgICAgIDM2LFxuICAgICAgOTcsXG4gICAgICAxODMsXG4gICAgICAxNjMsXG4gICAgICAxOTYsXG4gICAgICAxODksXG4gICAgICA3MixcbiAgICAgIDEyMyxcbiAgICAgIDExNixcbiAgICAgIDIxOCxcbiAgICAgIDY4LFxuICAgICAgMjQ2LFxuICAgICAgMTM5LFxuICAgICAgMjM2LFxuICAgICAgMTA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5IWko4UEZTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU1NTIzNjczMDo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzA1MjU3MTIzNDUyMTo3OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZTZ3TnNIRUwzUG5ia0dHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRsSFFkTS82V0szbnVzSnRtbGJKMk82MkpJdVVWYzFMUzVrSUREMkdTVnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWUNNSG1YdkJRczZ6UkpHMi9GV0xrS091TXpwcnN3V0lKQm1sdzM1Tms4WjJab1hmdVpka2FDMmw3aEI5dlJoSFMwNlg3NXF3cHN1L0M3UEhXa3ZNQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR2JvMW1MVG1uclQwdWlqaWdjN0FiaHhRcW9FMlZ3YTk5aENpVTVBSjROWGg1dHdQakkrQnYwY3p5dVZlcDVOS0U2cS9PRUZ2SU5WN3NCcEFIS0UzaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NTUyMzY3MzA6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDYzNTcxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI3T1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjdPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN1YySkFvVDl1M1M2aE9hTXIrUHR3a1lTb25Fa1hDem1SZ1ZoN1l1eEs0az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDcwOTQ1MDYzLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
