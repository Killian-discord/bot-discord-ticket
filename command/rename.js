const Discord = require('discord.js');

module.exports.run = async(client, message, arg) => {

    // Interdiction aux membres d'effectuer la commande.
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
            return message.channel.send({
                embed: {
                    color: "0xf22525",
                    description: "Vous n'avez pas la permission pour effectuer cette commande!",
                }
            }).then(m => m.delete({ timeout: 10000 }));
    
    // On supprime la commande.
        message.delete();

    // On indique le nouveau nom au channel + information si aucun nom donné.
        let nouveaunom = args.join(" ");
        if(!nouveaunom)
            return message.channel.send({
                embed: {
                    color: "0xf22525",
                    description: "Vous devez donner un nom à ce channel.",
                }
            }).then(m => m.delete({ timeout: 10000 }));

    // On modifie le nom du channel.
        try{
            message.channel.setName(nouveaunom);
            message.channel.send({
                    embed: {
                        color: "RANDOM",
                        description: `:white_check_mark: Le nom du channel a été modifié par: ${nouveaunom}.`,
                    }
                }).then(m => m.delete({ timeout: 10000 }));
        } catch(e) {
            message.channel.send({
                embed: {
                    color: "0xf22525",
                    description: `:x: Une erreur est survenue lors de la modification du nom du channel.`,
                }
            }).then(m => m.delete({ timeout: 10000 }));
        }

    

};

module.exports.help = {
    name: "nom"
};