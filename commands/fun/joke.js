const Discord = module.require("discord.js");
const { ApplicationCommandOptionType } = require("discord.js")

module.exports = {
	name: 'joke',
	description: 'Request a joke!',

	async execute({inter}) {
		const https = require('https');

		const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&format=txt';
		const options = {
		method: 'GET',
		};

		const req = https.request(url, options, (res) => {
		let data = '';
		res.on('data', (chunk) => {
			data += chunk;
		});

		res.on('end', () => {
			inter.reply(data);
		});
		});

		req.on('error', (error) => {
		console.error(error);
		});

		req.end();

	}
}