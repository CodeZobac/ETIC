from click.testing import CliRunner
import ex_shopping_list


def test_call_hello():
    runner = CliRunner()
    result = runner.invoke(ex_shopping_list.hello)
    assert result.exit_code == 0
    assert "Hello" in result.output


def test_call_add():
    runner = CliRunner()
    result = runner.invoke(ex_shopping_list.add, ["milk"])
    assert result.exit_code == 0
    assert "Added milk" in result.output


def test_call_remove():
    runner = CliRunner()
    result = runner.invoke(ex_shopping_list.remove, ["milk"])
    assert result.exit_code == 0
    assert "Removed milk" in result.output
