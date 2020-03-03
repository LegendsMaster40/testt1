const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("684018456156569701")
setInterval(function() {
channel.send(`ttt ttt ttt ttt ttt`);
}, 30)
})

client.login(process.env.BOT_TOKEN);