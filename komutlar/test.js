const Discord = require("discord.js");

exports.run = (client, message, params) => {
  message.channel.send("Çalışıyür Dayıcım")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["herkese-rol-ver"],
  permLevel: 0
};

exports.help = {
  name: "test",
  description: "Sunucuda bulunan tüm üyelere belirtilen rol verilir.",
  usage: "test"
};