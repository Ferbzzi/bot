module.exports = {
    app: {
        px: 'pc!',
        token: 'OTA4NTA1NTIwMTQ5Nzg2Njg0.YY2tsw.0HmF6MpelMIaxnwG8QSHaWzS52Y',
        playing: 'by Ferb ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'Players Community',
            commands: ['cofnij', 'wyczysc', 'filter', 'zapetl', 'pauza', 'odtworz', 'szukaj', 'odtwarzaj', 'pomin', 'stop', 'glosnosc']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
