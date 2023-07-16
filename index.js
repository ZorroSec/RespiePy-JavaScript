const { Client, Events, GatewayIntentsBits } = require('discord.js')
const { token } = require('./config.json')

const client = new Client({ intents: [GatewayIntentsBits.guilds] })

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`)
})

client.login(token)