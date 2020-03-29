const Discord = require('discord.js');

exports.run = async (codeAcademy, message, args) => {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Bu komutu kullanabilmek için **Kanalları Yönet** iznine sahip olmalısın!");
  let yashinu = message.guild.roles.find(a => a.name === "@everyone");
  if(message.channel.permissionsFor(yashinu).has('SEND_MESSAGES')) {
    message.channel.overwritePermissions(yashinu, {
      SEND_MESSAGES: false,
    });
    message.channel.send('Kanal kilitlendi!')
  } else {
    message.channel.overwritePermissions(yashinu, {
      SEND_MESSAGES: null,
    });
    message.channel.send('Kanal kilidi açıldı!')
  };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['lock'],
  permLevel: 0
};

exports.help = {
  name: 'kilit',
  description: 'Kanalı kilitler.',
  usage: 'kilit',
  kategori: 'yetkili'
};