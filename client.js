const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "??"
const dotenv = require("dotenv")
const botToken = process.env.BOT_TOKEN
bot.on('ready', () => {
	bot.user.setStatus("online").catch(console.error)
	bot.user.setActivity("everything you say", {
		type: "watching"
	}); ;
});

bot.on('message', msg => {  
	"Bot online"
  if (msg.author.bot)
		return;
    
    	const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    	const command = args.shift().toLowerCase();

    if (!msg.content.startsWith(prefix))
		return;
    
    if (command === "help") {
    msg.reply("There is no help for you");
    console.log("Command 'help' run")
    };
    if (command === "join") {
     if (!message.guild) return;

  if (message.content === '/join') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('Channel joined');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
if (command === "leave") {
  if (!message.guild) return;
  
if (!message.content ==='  '/join' {
  if (message.member.voiceChannel) {
  message.member.voiceChannel.leave()
  .then(connection => {
  message.reply('Disconnected from channel');
  })
  .catch(console.log);
  } else {
  message.reply('Unable to disconnect. Please try again');
  }
  }
  });
//Make commands above this line
});
client.login(botToken);
