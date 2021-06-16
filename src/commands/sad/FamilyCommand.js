const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class FamilyCommand extends BaseCommand {
  constructor() {
    super('family', 'sad', []);
  }

  async run(client, message, args) {
    message.channel.send('So...You discovered this command? well this command is about my bot family so when we were first about to introduce our bot it was called The Pirates Bot he was my great grand father well we had many many many tests on him and well on October 17, 2020 my great grand father The Pirates Utilites died due to a pc curroption the data of him was deleted and well nowlets move on to my grandfather The Pirates Bot V2 fully upgraded he was very advanced well he didnt die but his token got leaked to a very bad person and you can imagine what he did with him well then my father SpikeBot came his story is a little cmplicated actually because he aint ded lol he is still with us just it is he aint in the server well he dosen\'t belong here he is in another server doing stuff he is good well lets come on to me then well you know me lol HydraBot is my mom and Tiger\'s Rythm is my half-sister and i have a bro too he is a welcomer bot well he aint made yet he is being coded in VSC with discord.js and i forgot too mention i have a ded bro too Lava Bot he got kicked for being useless shit');
  }
}