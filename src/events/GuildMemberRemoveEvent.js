// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
  const Discord = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }
  
  async run(client, member) {
    const ByeByeEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
       
  }
}