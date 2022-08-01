module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`Je suis connecté à : ${client.user.username}`)

        var compteurStatus = 1
        setInterval(async () => {
            status =  [`FTF_Furious#8150`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "STREAMING",
                    url: "Regarde FTF_Furious#8150"
                  }],
                  status: "streaming"})
        }, 5000);
    }
}
