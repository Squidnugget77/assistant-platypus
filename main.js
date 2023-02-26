const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');
const Economy  = require('discord-economy-super')

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
   disableMentions: 'everyone',
});

client.config = require('./config');

global.eco = new Economy()
global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');
console.log(client.channels.cache.size);

client.login(client.config.app.token);