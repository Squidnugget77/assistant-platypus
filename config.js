require('dotenv').config(); // Import the dotenv module and configures it to default settings
module.exports = {
  app: {
    token: process.env.TOKEN,
    playing: '/play', 
    global: true,
    guild: process.env.GUILD,
  },
  
  opt: {
    DJ: {
      enabled: false,
      roleName: '',
      commands: []
    },
    maxVol: 100,
    leaveOnEnd: false,
    loopMessage: false,
    spotifyBridge: true,
    defaultvolume: 50,
    discordPlayer: {
      ytdlOptions: {
        quality: 'highestaudio',
        highWaterMark: 1 << 25
      }
    }
  }
};