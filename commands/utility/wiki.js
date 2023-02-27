const Discord = module.require("discord.js");
const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
  name: "wiki",
  description: "Get Search Results from Wikipedia",
  options: [
    {
      name: 'search',
      description: 'Wikipedia Search',
      type: ApplicationCommandOptionType.String,
      required: true,
    }
  ],
  async execute({inter}) {
    const search = inter.options.getString('search');
    
    // Uses the var "search" to make a standard wikipedia link
    const link = `https://www.wikipedia.org/w/index.php?search=${search}&ns0=1`;
    
    const embed = new Discord.EmbedBuilder()
    .setTitle(`Wikipedia Sarch`)
    .addFields(
      { name: `You Searched for:`, value: `${search}`},
      { name: `Results:`, value: `[Here's what I found](${link})` },
      )
      .setColor('c99997')
      
      await inter.reply({ embeds: [embed] })
      
    }
  }