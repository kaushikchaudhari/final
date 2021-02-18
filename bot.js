const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.ODExNjM3OTU5MDkzNzgwNTQ1.YC1GwA.ORag7LUl5h4fskr4-3aULMhPF1I);//BOT_TOKEN is the Client Secret
