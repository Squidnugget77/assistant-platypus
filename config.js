module.exports = {
    app: {
        token: 'MzY1OTgxNzU5Njg0NDc2OTI4.GPipNe.E6kDxW83f1Js1Esn3iUV-TCH6FJzPu5Yl8mp9Q',
        playing: 'Slash Commands',
        global: true,
        guild: '913856041937158145'
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
        defaultvolume: 50,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
