import { Command } from "../../structures/Command";

export default new Command({
    name: "ping",
    description: "Какое-то описание",
    defaultPermission: true,
    run: async ({ interaction }) => {
        await interaction.reply({content: "test", ephemeral: true});
    }
});
