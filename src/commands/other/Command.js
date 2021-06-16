const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class Command extends BaseCommand {
  constructor() {
    super('l', 'other', []);
  }

  run(client, message, args) {
    message.channel.send(`${message.author} wow you have discovered a secret command in my commands nice work this command s useless`);
  }
}