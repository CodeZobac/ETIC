import click

@click.group
@click.pass_context
def cli(ctx):
    ctx.ensure_object(list)

@cli.command()
@click.argument('item')
@click.pass_context
def add(ctx, item):
    ctx.obj.append(item)
    click.echo(f'Added {item}')

