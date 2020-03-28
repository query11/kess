const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`anto${message.guild.id}`, true)
    message.channel.send('Başarılı Şekilde Küfür Engel Aktif Edildi.')
      db.set(`anto${message.guild.id}`, "acik")
  return
}
if (args[0] === 'kapat') {
  db.delete(`anto${message.guild.id}`)
message.channel.send('Başarılı Şekilde Küfür Engel Kapatıldı.')
      db.set(`anto${message.guild.id}}`, "kapali")
return
}
  message.channel.send('Lüten `aç` yada `kapat` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür',
 description: 'küfür',
 usage: 'küfür'
};