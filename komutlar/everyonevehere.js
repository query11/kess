const Discord = require("discord.js");
const fs = require('fs');
exports.run = (client, msg, args) => {
  if(msg.author.id != msg.guild.ownerID) {
    msg.reply("bu komudu sadece sunucu sahibi kullanabilmektedir!")
  } else {
    if(!args[0]) {
      msg.reply("lütfen `aç` veya `kapat` şeklinde bir ayar giriniz.")
    } else {
      if(!["aç", "kapat"].includes(args[0])) {
        msg.reply("lütfen sadece `aç` veya `kapat` şeklinde bir ayar giriniz.")
      } else {
        if(args[0] == "aç") {
          try {
            let dosya = JSON.parse(fs.readFileSync('./ayarlar/everhereengel.json', 'utf8'));
            dosya[msg.guild.id] = {
              sistem: true
            }
            fs.writeFile('./ayarlar/everhereengel.json', JSON.stringify(dosya), (err) => {
              if(err) throw err;
            })
            msg.reply("sistem başarıyla açıldı ☑️");
          } catch (e) {
            console.log(e);
          }
        } else if(args[0] == "kapa") {
          try {
            let dosya = JSON.parse(fs.readFileSync('./ayarlar/everhereengel.json', 'utf8'));
            dosya[msg.guild.id] = {
              sistem: false
            }
            fs.writeFile('./ayarlar/everhereengel.json', JSON.stringify(dosya), (err) => {
              if(err) throw err;
            })
            msg.reply("sistem başarıyla kapatıldı ❌");
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "eh-engel",
  description: "",
  usage: ""
};