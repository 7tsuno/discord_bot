const Discord = require('discord.js');

const client = new Discord.Client();

const token = require( "./setting.json" ).token;

client.on('ready', () => {
    console.log('ready...');
});

const dictionary = require( "./dictionary.json" )


client.on('message', message => {
    

    if (dictionary[message.content]) {

        let channel = message.channel;
        let author = message.author.username;
        let reply_text = dictionary[message.content];

        channel.send(reply_text)
            .catch(console.error);
        return;
    }
    
    if(message.content === 'スタンプリスト'){
    
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = Object.keys(dictionary).join(' , ');
        
        console.log(dictionary);

        channel.send(reply_text)
            .catch(console.error);
        return;
    }
    

	if(!message.content.indexOf("スタンプ追加") && message.content.match(/ /gm).length === 2){
		dictionary[message.content.split(/ /gm)[1]] = message.content.split(/ /gm)[2];
        let channel = message.channel;
        channel.send('スタンプを追加したぞ')
            .catch(console.error);
        return;
	}
    

	if(!message.content.indexOf("スタンプ削除") && message.content.match(/ /gm).length === 1 && dictionary[message.content.split(/ /gm)[1]]){
		delete dictionary[message.content.split(/ /gm)[1]];
        let channel = message.channel;
        channel.send('スタンプを削除したぞ')
            .catch(console.error);
        return;
	}

    
});


client.login(token);
