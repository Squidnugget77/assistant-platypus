module.exports = {
    app: {
        token: 'MzY1OTgxNzU5Njg0NDc2OTI4.GPipNe.E6kDxW83f1Js1Esn3iUV-TCH6FJzPu5Yl8mp9Q',
        playing: 'Music',
        global: true,
        guild: '997291520065556590'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'Assistant Platypus',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
