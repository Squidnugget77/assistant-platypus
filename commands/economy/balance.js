module.exports =  {
    name: "balance",
    description: "Check your balance!",
    async execute ({client, eco}) {
        const [userID] = message.author.id
        const guild = eco.guilds.get(message.guild.id)
      
        const user = guild.users.get(
            message.mentions.users.first()?.id ||
            message.guild.users.get(userID) ||
            message.author.id
      )
      
        const [balance, bank] = [
            user.balance.get(),
            user.bank.get()
        ]
      
        message.channel.reply(
            `${message.author}'s balance:\n` +
            `Coins: **${balance}**.\n` +
            `Coins in bank: **${bank}**.`
        )
    }
    


}