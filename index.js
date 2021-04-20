let Discord = require('discord.js');
let client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag);
  client.channels.cache.find(channel => channel.name == 'channel-name-no-hashtag').send('hi');
});

client.on('message', msg => {
  if (msg.content == 'ping') {
    msg.reply('Pong!');
  } else if (msg.content.includes('😎')) {
    msg.react('😎');
  }
})

// Command System
let commands = {
  '8ball': {
    info: "Ask the Magic 8-ball for a response.", // For help command
    run(msg) {
      let responses = [
        'Yes',
        'No',
        'Maybe',
        'Perhaps',
        "That's up to you",
        "Ask again later",
        "For Certain",
        "Unlikely",
        // add more if you want
      ];
      let chosen = responses[Math.floor(Math.random() * responses.length)];
      msg.reply(chosen);
    },
  },
  '8-ball': '8ball', // Alias
  'random': {
    syntax: 'random [number]',
    info: 'Generate a random number between 1 and 10, or 1 and a chosen integer.',
    run(msg) {
      let min = 1;
      let max = 10;
      let args = msg.content.trim().split(' ');
      args.shift(); // pop off first argument
      if (args.length >= 1) {
        max = Number(args[0]) || max;
      }
      msg.reply(Math.floor((Math.random() * max) + min));
    }
  }
};
let prefix = '/';
client.on('message', msg => {
  if (msg.content.substr(0, prefix.length) == prefix) {
    let cmd = msg.content.substr(prefix.length).split(' ')[0]; // get first word in our command
    if (cmd == 'help') { // Show our commands.
      msg.reply(
        'Commands:\r\n' + Object.entries(commands)
        .filter(([key, value]) => typeof value != 'string') // Filter out Alias's
        .map(([key, value]) => `${prefix}${value.syntax || key}: ${value.info}`) // Convert our commands to string format
        .join('\r\n') // Join by newline
    );
    } else {
      if (cmd in commands) {
        let command = commands[cmd];
        if (typeof command == 'string') { // Alias support
          commands[command].run(msg);
        } else {
          command.run(msg);
        }
      } else {
        msg.reply("Sorry, I don't know what command you're referring to! Say `" + prefix + "help` for more info.")
      }
    }
  }
})



const TOKEN = "REDACTED";
if (TOKEN == "REDACTED") {
  throw new Error("You need to add your bot's own token!")
}
client.login(TOKEN);
