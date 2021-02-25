const config = require('../config')
const axios = require('axios')

async function get(battery, phn_info) {

    if (battery.plugged) {
        var batttxt = `${battery.battery}% (Charging)`
    } else {
        var batttxt = `${battery.battery}%`
    }

    return ({
        msg: `*AloneBots~:*\n\nThis is modified version of *Whatsbot* by Alone🙂\n\n*Device:* ${phn_info.device_manufacturer} Note 5 Pro (${phn_info.device_model})\n*Battery:* ${batttxt}\n*Bot Version:* ${phn_info.wa_version}\n*Pmpermit:* ${config.pmpermit_enabled}\n*Mutetime:* ${config.pmpermit_mutetime/60} Minutes\n\n*For more Information*\n` + "```https://t.me/Alone215```",
        mimetype: "image/jpeg",
        data: Buffer.from(((await axios.get('https://telegra.ph/file/ab6d3cf0089d151fb044b.jpg', { responseType: 'arraybuffer' })).data)).toString('base64'),
        filename: "start.jpg"
    })
}

module.exports = {
    get
}
