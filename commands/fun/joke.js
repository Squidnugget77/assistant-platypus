const Discord = module.require("discord.js");
const { ApplicationCommandOptionType } = require("discord.js")

module.exports = {
	name: 'joke',
	description: 'Request a joke!',

	async execute({inter}) {
		const https = require('https');

// Define the URL and options for the API request
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&format=txt';
const options = {
  method: 'GET',
};

// Make the API request
const req = https.request(url, options, (res) => {
  // When a response is received, concatenate the chunks of data
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  // When the response has ended, log the data to the console
  res.on('end', () => {
    inter.reply(data);
  });
});

// Handle errors
req.on('error', (error) => {
  console.error(error);
});

// Send the request
req.end();

	}

}
