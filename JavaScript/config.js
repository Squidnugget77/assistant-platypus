module.exports = {
    app: {
        token: 'MzY1OTgxNzU5Njg0NDc2OTI4.G6ooFD.uMWIG6fCxnemwofhOXvjTnly1ldmYtYLPxVMMY',
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