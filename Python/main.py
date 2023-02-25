import discord, os
from dotenv import load_dotenv
from discord.utils import get


intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'Logged in as {client.user}')

@client.event
async def on_message(msg):
    global ryan
    print(f' In [ {msg.channel} ] by [ {msg.author} ]: {msg.content}')
    if msg.author == client.user:
        return

    if msg.author.id == 787104279714332693 and ryan == True:

        await msg.reply("https://a1png.com/wp-content/uploads/2021/11/ryan-reynolds-8.png")
    
    if msg.content.lower() == "begin":
        ryan = True
        print("Picture Begin")
    if msg.content.lower() == "stop":
        ryan = False
        print("Picture Stop")







client.run("MzY1OTgxNzU5Njg0NDc2OTI4.G6ooFD.uMWIG6fCxnemwofhOXvjTnly1ldmYtYLPxVMMY")