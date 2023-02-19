module.exports = {
    app: {
        token: '',
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
