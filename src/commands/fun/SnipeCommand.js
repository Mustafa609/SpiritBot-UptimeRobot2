const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SnipeCommand extends BaseCommand {
  constructor() {
    super('snipe', 'fun', []);
  }

  async run(client, message, args) {
    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.reply(`There is no message to snipe`);

    const snipeEmbed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
      .setDescription(msg.content)

    message.channel.send(snipeEmbed);
  }
}