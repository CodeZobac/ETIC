import discord
from discord.message import Message

from eticgpt.clients import OllamaAPI
from eticgpt.models import OllamaPrompt, OllamaResponse


intents= discord.Intents.default()

client = discord.Client(intents=intents)

ollamaAPI=OllamaAPI()

@client.event
async def on_connect():
    print("i'm connecting...")

@client.event
async def on_ready():
    print('connected!!')

@client.event
async def on_message(message: Message):
    assert message
    print(message)
    if message.author != client.user:

        if message.content.startswith("/ask"):
            question=OllamaPrompt(
                prompt=message.content.split("/ask")[-1]
            )
            
            response: OllamaResponse= ollamaAPI.prompt(prompt=question)
            print(response)

            if not response.done:
               await message.channel.send(":poop oops!")
            else:
                await message.channel.send(response.response)
