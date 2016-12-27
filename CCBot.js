const Discord = require("discord.js");
const NodeJS = require("node.js");

const bot = new Discord.Client();

// login

const token = '';

// Test if bot is active
bot.on('message', message => {
		
	if (message.content === '!online') {
		message.channel.sendMessage('I am online!');
	}
	});
	
	
// Help
bot.on('message', message => {
		
	if (message.content === '!help') {
	message.channel.sendMessage('Commands available: | !time | !up | !ping |');
	}
	});		
	
// time check
bot.on('message', message => {
var today = new Date();
var str = today.toGMTString();
	
	if (message.content === '!time') {
		message.channel.sendMessage('Current EVE time is: ' + str );
		return;
	}
	});	
	
// ping everyone
bot.on('message', message => {
	if (message.content === '!ping') {
		message.channel.sendMessage('@everyone TEST ping, please ignore');
		return;
	}
	});	

// checks if tranqulity is up
bot.on('message', message => {
	
	if (message.content === '!up') {
	}
	});	
	
// Intel portion

var https = require('https');

function getData(url, callback) {
	https.get(url, (res) => {
  	console.log('success');
  	var body = '';
    res.on('data', (chunk) => {
    	body += chunk;
    });
    res.on('end', () => {
      body = JSON.parse(body);
      callback(body[0]);
    });
  }).on('error', (e) => {
  	console.log("Error: " + e);
  });
}

var today = new Date();
var str = today.toGMTString();

function OstiKill() {
bot.on('ready', message => {		
	setInterval(() => {
    getData('https://zkillboard.com/api/kills/solarSystemId/30003792.xml/', (kill) => {
      if (kill.killID !== lastKill) {
    		message.channel.sendMessage("https://zkillboard.com/kill/" + kill.killID);
       var lastKill = kill.killID;
      }
		});
  }, 100);
});
}

OstiKill();

bot.login(token);