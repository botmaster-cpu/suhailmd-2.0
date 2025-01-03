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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_06_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDczLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NixcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMixcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg0LFxuICAgICAgICA3MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NSxcbiAgICAgICAgODksXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib2s4eFRSSGVFS1FpTllUaWVMYkpxSGRVckM2dll5QWcyQmxwelNhUVNKdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQ3NjQ4NzE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5OUMyNjQ2RDk2NzY2NjM5OUVCRDc0QjczNEVBN0U3M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU4NjYzNjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidmVYbmpDQmNSTnVOcGp5eFIxYlBuQVwiLFxuICBcInBob25lSWRcIjogXCJiOTVhZTBkOS02N2EyLTRmYzYtYjc4YS04YzEwNTNjZGQ0MTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMjE1LFxuICAgICAgMTc3LFxuICAgICAgMTczLFxuICAgICAgMTU3LFxuICAgICAgMTk1LFxuICAgICAgMTg2LFxuICAgICAgMzEsXG4gICAgICAxNDUsXG4gICAgICAxNTYsXG4gICAgICAxMDIsXG4gICAgICA0MSxcbiAgICAgIDIxNyxcbiAgICAgIDMzLFxuICAgICAgOTgsXG4gICAgICAyNyxcbiAgICAgIDE1NyxcbiAgICAgIDEyOSxcbiAgICAgIDE2NCxcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgNDgsXG4gICAgICAxNzEsXG4gICAgICAyOSxcbiAgICAgIDE0MCxcbiAgICAgIDczLFxuICAgICAgMzksXG4gICAgICA2OCxcbiAgICAgIDIxMixcbiAgICAgIDI1NSxcbiAgICAgIDE0OCxcbiAgICAgIDIzNixcbiAgICAgIDIzNSxcbiAgICAgIDQ1LFxuICAgICAgMTY2LFxuICAgICAgNzYsXG4gICAgICAyNCxcbiAgICAgIDI1MSxcbiAgICAgIDE3OCxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pQjlhOEVFUFh2M0xzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVlXcU40VFZmQzlCZVExWktlcFdaa1N0MWhMNjlOUGh4S3NJT2k0V2FtST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2ZG1HeUZsM2VHUnFNKzNrM25CN2IvYTBKa0srcStSNm5SYllEWVNoelRDVFpTeXkvYlRsbTlja0d0ZEtoL2sySFdyK1VlMmFQWTg0RWRJdzhuUnlBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYaUcyYmU4Y1AvdStnclBkS3FSZVUxdDNmZFNNNXIzbENLa01GMnBEWWJYTFlVZ3BFMHNwanVRdFRVUWZvOGpCL2lORDVqeFc4eDhsWmFsczN4ZFFqdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDc2NDg3MTQ6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MDg5MjE5OTg1NDI3NDo2MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLgvJLImsSmyLrOk+KYr+G5iMOL8J+FvNKS4LySXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ3NjQ4NzE0OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1ODY2MzYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGR3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvYVVQaEMwTUF4L1AreDZ6UjM1cGVFS0hsakp6Qkd0bXA1bVFGeUR5Uk5JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNzQyMjUxMTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTg2NjM2MjIyNFwifSIKfQ=="  // PUT your SESSION_ID 


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
