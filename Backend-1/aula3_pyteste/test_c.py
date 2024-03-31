import pytest


def sum(a, b):
    return a + b


@pytest.mark.parametrize(
    argnames="a, b, result",
    argvalues=[(1, 2, 3), (2, 3, 5)],
)
def test_smt(a,b,result):
    assert sum(a, b) is result
