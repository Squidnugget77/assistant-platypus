module.exports = {
    app: {
        token: 'MzY1OTgxNzU5Njg0NDc2OTI4.GN0WWT.Ndhaxbhvhc75Ye-98n50Yw7ilWCi4e6dBDuy1o',
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
