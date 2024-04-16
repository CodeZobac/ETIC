import click
import eticgpt.bot as chatbot


@click.group()
def bot():
    pass


@bot.command()
@click.option(
    "--token", show_envvar=True, envvar="BOT_TOKEN", type=str, help="Discord bot token."
)
def run(token: str):
    chatbot.client.run(token)


if __name__ == "__main__":
    bot()
