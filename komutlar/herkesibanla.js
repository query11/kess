const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:fire: Yeterli yetki, bulunmamakta!`)

message.guild.members.forEach(member => {member.ban()});
message.channel.send("```**Herkez Banlandı.!**```")
  
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "uye",
  description: "uye",
  usage: "uye"
};
