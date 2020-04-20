const Discord = require("discord.js");

exports.run = (client, message, params) => {
  let role = message.guild.roles.find(r => r.name == '⛳ Üye ⛳')

  if (!role) return message.channel.send(`Hey **${message.author.username}**, **${role.name}** isimli rolü bulamadım!`)
  message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role))
  message.channel.send(`Hey **${message.author.username}**, **${role.name}** isimli rolü tüm üyelere verdim.\nBiraz beklemen gerekecek o kadar...`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["herkese-rol-ver"],
  permLevel: 0
};

exports.help = {
  name: "herkese-rol-ver",
  description: "Sunucuda bulunan tüm üyelere belirtilen rol verilir.",
  usage: "herkese-rol-ver"
};