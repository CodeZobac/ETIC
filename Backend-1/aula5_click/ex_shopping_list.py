# import click

# @click.group()
# @click.pass_context
# def cli(ctx):
#     ctx.ensure_object(list)
#     with open("shopping_list.txt", "w") as f:
#         for item in ctx.obj:
#             f.write(f"{item}\n")
#     click.echo("Exported shopping list")


# @cli.command()
# @click.argument("item")
# @click.pass_context
# def add(ctx, item):

#     ctx.obj.append(item)
#     click.echo(f"Added {item}")


# @cli.command()
# @click.argument("item")
# @click.pass_context
# def remove(ctx, item):
#     ctx.obj.remove(item)
#     click.echo(f"Removed {item}")


# @cli.command()
# @click.pass_context
# def write(ctx):
#     with open("shopping_list.txt", "w") as f:
#         for item in ctx.obj:
#             f.write(f"{item}\n")
#         click.echo("Exported shopping list")


# if __name__ == "__main__":
#     cli(obj=[])


# import click

# TODO_FILE = "todo_list.txt"
# todo_list = []


# def load_todo_list():
#     """Load the To-Do list from a file."""
#     try:
#         with open(TODO_FILE, "r") as file:
#             return [line.strip() for line in file.readlines()]
#     except FileNotFoundError:
#         return []


# def save_todo_list():
#     """Save the To-Do list to a file."""
#     with open(TODO_FILE, "w") as file:
#         for item in todo_list:
#             file.write(f"{item}\n")


# @click.group()
# def cli():
#     global todo_list
#     todo_list = load_todo_list()


# @cli.command()
# @click.argument("item")
# def add(item):
#     """Add a new item to the To-Do list."""
#     todo_list.append(item)
#     save_todo_list()
#     click.echo(f"Item added: {item}")


# import click


# class ShoppingList:
#     def __init__(self):
#         self.items = []


# @click.group()
# @click.pass_context
# def cli(ctx):
#     if ctx.obj is None:
#         ctx.obj = ShoppingList()


# @click.command()
# @click.argument("item")
# @click.pass_context
# def add(ctx, item):
#     ctx.obj.items.append(item)
#     click.echo(f"Added {item}")


# @cli.command()
# @click.argument("item")
# @click.pass_context
# def remove(ctx, item):
#     try:
#         ctx.obj.items.remove(item)
#         click.echo(f"Removed {item}")
#     except ValueError:
#         click.echo(f"Item '{item}' not found in the shopping list.")


# @cli.command()
# @click.pass_context
# def list_items(ctx):
#     if not ctx.obj.items:
#         click.echo("No items in the shopping list.")
#     else:
#         click.echo("Shopping List:")
#         for i, item in enumerate(ctx.obj.items, start=1):
#             click.echo(f"{i}. {item}")


# @cli.command()
# @click.pass_context
# def write(ctx):
#     if not ctx.obj.items:
#         click.echo("Shopping list is empty.")
#     else:
#         try:
#             with open("shopping_list.txt", "w") as f:
#                 for item in ctx.obj.items:
#                     f.write(f"{item}\n")
#                 click.echo("Exported shopping list to shopping_list.txt")
#         except IOError:
#             click.echo("Failed to write shopping list to file.")


# cli.add_command(add)


# if __name__ == "__main__":
#     cli(obj={})


import click
import os

filename = "compras.txt"


@click.command()
def hello():
    click.echo("Hello", color=True)


@click.command()
@click.argument("item")
def add(item: str):
    with open(filename, "a") as f:
        f.write(f"{item}\n")
    click.echo(f"Added {item}")


@click.command()
@click.argument("item")
def remove(item: str):
    click.echo(f"Removed {item}")
