import {bot,Event} from "../..";

export default new Event("ready", () => {
    console.log(`[Client] ${bot.user.username} successfully connected ‍🔥`);
});
