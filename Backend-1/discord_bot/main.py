import discord
from discord.ext import commands
import env


# intents = discord.Intents.default()
# intents.typing = True
# intents.messages = True
client = commands.Bot(command_prefix="/input ", intents=discord.Intents.all())


@client.event
async def on_ready():
    print("ETICommander is ready!")
    print("----------------------")


@client.command()
async def ping(ctx):
    await ctx.send(f"Pong! {round(client.latency * 1000)}ms")


# client.run("MTIyNDc5MTkxMTM4MzE3NTIyOA.GGUGhr.mObvZ3uy12C8zl8RstWOhvtK2_BY2gG_TFlk_0")


if __name__ == "__main__":
    client.run(env.BOT)
