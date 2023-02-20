module.exports = {
    app: {
        token: 'MzY1OTgxNzU5Njg0NDc2OTI4.GSErjZ.rF6Z0-uVSPuH1ZAOn6eZ0Tw2BfSqSEpH6eydzk',
        playing: '/help',
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
