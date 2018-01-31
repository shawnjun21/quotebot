const Discord = require("discord.js");
const bot = new Discord.Client();

const probability = 3;

bot.on("message", message =>
{
    if (message.author.id == 325854888707751936)
	{
        var lol = "Shawn Jun"
    }
    if (message.author.id == 203035132700000266)
	{
        var lol = "Kai Roberts"
    }
    if (message.author.id == 358133639126581249)
	{
        var lol = "J.D. Mercado"
    }
    if (message.author.id == 357693946777829376)
	{
        var lol = "Aidan Bowie"
    }
    if (message.author.id == 317147935294881792)
	{
        var lol = "Tyler Murakami"
    }
    if (message.author.id == 159082888137015296)
	{
        var lol = "Haley Yanagisawa"
    }
    if (message.author.id == 160105994217586689)
	{
        var lol = "Miki Bot"
    }
    if (message.author.id == 204130146834186241)
	{
        var lol = "Nick Bervar"
    }
    if (message.author.id == 357589344690896897)
	{
        var lol = "Devin Korybski"
    }
    if (message.author.id == 270962220844843008)
	{
        var lol = "Ryan Shiraki"
    }
    if (message.author.id == 204699086278885376)
	{
        var lol = "Matthew Yi"
    }
    if (message.author.id == 357641491503382530)
	{
        var lol = "Kawai Kelekolio"
    }
    if (message.author.id == 352520280788303872)
	{
        var lol = "Cruz Mercado"
    }
    if (message.author.id == 357636695765811200)
	{
        var lol = "Celine Oh"
    }
    if (message.author.id == 358435335543193610)
	{
        var lol = "Jack Vann"
    }
    if (message.author.id == 403066964119126016)
	{
        var lol = "J.D. Bot"
    }
    if (message.author.id == 403833025206550529)
	{
        var lol = "Joseph Stalin"
    }
    if (message.author.id == 358132469406629888)
	{
        var lol = "Michaela de Leon"
    }
    if (message.author.id == 253027515927494665)
	{
        var lol = "Michael Chen"
    }
    if (message.author.id == 358349584629628949)
	{
        var lol = "Mila Becker"
    }
    var rando = Math.floor(Math.random() * probability) + 1;
    if (rando == 1 && !message.author.bot)
    {
        message.channel.send("*\"" + message.content + "\"* - " + lol + ", 2018")
    }
});

bot.login(process.env.BOT_TOKEN);
