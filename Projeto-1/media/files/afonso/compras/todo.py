# import click

# # Dummy to-do list data
# todo_list = []


# @click.command()
# @click.argument("task")
# def add(task):
#     """Add a new task to the to-do list."""
#     todo_list.append(task)
#     click.echo(f'Task "{task}" added to the to-do list.')


# @click.command()
# def list_tasks():
#     """List all tasks in the to-do list."""
#     if not todo_list:
#         click.echo("No tasks in the to-do list.")
#     else:
#         click.echo("To-Do List:")
#         for i, task in enumerate(todo_list, start=1):
#             click.echo(f"{i}. {task}")


# @click.command()
# @click.argument("index", type=int)
# def delete(index):
#     """Delete a task from the to-do list by index."""
#     try:
#         task = todo_list.pop(index - 1)
#         click.echo(f'Task "{task}" deleted from the to-do list.')
#     except IndexError:
#         click.echo("Invalid task index. Please provide a valid index.")


# @click.group()
# def cli():
#     """Simple to-do list manager."""

#     cli.add_command(add)
#     cli.add_command(list_tasks)
#     cli.add_command(delete)


# if __name__ == "__main__":
#     cli()

import click

todo_list = []


@click.command()
def add():
    task = click.prompt("Enter task")
    todo_list.append(task)
    click.echo(f'Task "{task}" added to the to-do list.')


@click.command()
def list():
    if not todo_list:
        click.echo("No tasks in the to-do list.")
    else:
        click.echo("To-Do List:")
        for i, task in enumerate(todo_list, start=1):
            click.echo(f"{i}. {task}")


@click.command()
def delete():
    index = click.prompt("Enter index", type=int)
    try:
        task = todo_list.pop(index - 1)
        click.echo(f'Task "{task}" deleted from the to-do list.')
    except IndexError:
        click.echo("Invalid task index. Please provide a valid index.")
    return index


@click.group()
def cli():
    pass


while True:
    cli.add_command(add)
    cli.add_command(list)
    cli.add_command(delete)


if __name__ == "__main__":
    cli()
