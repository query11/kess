const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`antoxd${message.guild.id}`, true)
    message.channel.send('Başarılı Şekilde Reklam Engel Aktif Edildi.')
      db.set(`antoxd${message.guild.id}`, "acik")
  return
}
if (args[0] === 'kapat') {
  db.delete(`antoxd${message.guild.id}`)
message.channel.send('Başarılı Şekilde Reklam Engel Kapatıldı.')
      db.set(`antoxd${message.guild.id}}`, "kapali")
return
}
  message.channel.send('Lüten `aç` yada `kapat` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['reklam'],
 permLevel: 0
};

exports.help = {
 name: 'reklam',
 description: 'reklam',
 usage: 'reklam'
};