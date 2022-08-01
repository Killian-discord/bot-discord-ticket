const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;

	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Selectionnez pour supprimer le ticket.')
					.addOptions([
						{
							label: '🗑️ Supprimer le Ticket',
							description: 'Supprime le salon',
							value: 'delete',
						}
					])
                );


        let catégorie = "980614331207127110"
        let roleStaff = interaction.guild.roles.cache.get('980614247987966035')

        let catégorie_boutique = "980912882940268585"
        let roleStaff_boutique = interaction.guild.roles.cache.get('980614247987966035')

        let catégorie_illégaux = "980912772680400997"
        let roleStaff_illégaux = interaction.guild.roles.cache.get('980614247987966035')

        let catégorie_légaux = "980912439765913630"
        let roleStaff_légaux = interaction.guild.roles.cache.get('980614247987966035')

        let catégorie_aide = "981523731174264842"
        let roleStaff_aide = interaction.guild.roles.cache.get('9806142479879660355')


        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)

        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: 'Vous avez déja un ticket d\'ouvert sur le serveur.', ephemeral: true})
            
            if (interaction.values[0] == "aide") {
                interaction.guild.channels.create(`Ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket pour bénéficier d\'une aide')
                    .setDescription('Veuillez bien détailler votre transfert un administrateur du serveur viendra pour prendre en charge.')
                    .setFooter('FTF_Furious#8150')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })


            } else if (interaction.values[0] == "boutique/Remboursement") {
                interaction.guild.channels.create(`Ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie_boutique}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff_boutique,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket pour un remboursement')
                    .setDescription('Veuillez bien détailler votre remboursement un administrateur du serveur viendra pour prendre en charge.')
                    .setFooter('FTF_Furious#8150')
                    c.send({embeds: [embed], content: `${roleStaff_boutique} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })

            } else if (interaction.values[0] == "légal") {
                interaction.guild.channels.create(`Ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie_légaux}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff_légaux,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket pour un remboursement')
                    .setDescription('Veuillez bien détailler votre remboursement un administrateur du serveur viendra pour prendre en charge.')
                    .setFooter('FTF_Furious#8150')
                    c.send({embeds: [embed], content: `${roleStaff_légaux} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })

            } else if (interaction.values[0] == "illégal") {
                interaction.guild.channels.create(`Ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie_illégaux}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff_illégaux,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket pour un remboursement')
                    .setDescription('Veuillez bien détailler votre remboursement un administrateur du serveur viendra pour prendre en charge.')
                    .setFooter('FTF_Furious#8150')
                    c.send({embeds: [embed], content: `${roleStaff_illégaux} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })



            }
        }
    }
}
