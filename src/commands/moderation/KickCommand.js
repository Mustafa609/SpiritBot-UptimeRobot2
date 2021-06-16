const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply(`You cannot kick members as you dont have permissions to kick members`);
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = 'No Reason Given';
    const KickEmbed = new Discord.MessageEmbed()
      .setColor('FF0000')
      .setTitle(`You Have Been Kicked From ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    const UnableEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('I was unable to kick this user')

    // >kick @user reason
    if (!args[0]) return message.reply('You need to mention a user for me to kick \`>kick (@user) (reason)\`');
    if (!mentionedMember) return message.reply('I searched this user far away but i couldnt find it. Kick Failed');

    const SuccessfulyKickedEmbed = new Discord.MessageEmbed()
     .setColor("RAMDOM")
     .setTitle(`Successfuly Kicked ${mentionedMember}`)
     .setDescription(`${mentionedMember} has been kicked for there crimes and i have sended them a dm about there kick and why did they got kicked`)
     .addField(`Reason` `${reason}`)
    try {
      await mentionedMember.send(KickEmbed);
      await message.channel.send(SuccessfulyKickedEmbed);
    } catch (err) {
      console.log(`This member has its dm off error: ${err}`);
    }

    try {
      await mentionedMember.kick(reason)
    } catch (err) {
      console.log(err);
      message.channel.send(`There was some error kicking this user please check if everything is right and this member is still in this server Kick Failed`);
    }
  }
}