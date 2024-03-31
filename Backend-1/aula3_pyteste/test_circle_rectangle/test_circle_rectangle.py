from circle import Circle
from rectangle import Rectangle
import pytest


@pytest.mark.parametrize(
    argnames="radius, expected_area", argvalues=[(5, 78.53975), (10, 314.159)]
)
def test_circle(radius, expected_area):
    """
    Test the area calculation of a Circle object.

    Args:
        radius (float): The radius of the circle.
        expected_area (float): The expected area of the circle.

    Returns:
        None
    """
    circle = Circle(radius)
    assert circle.area() == expected_area


@pytest.mark.parametrize(
    argnames="width, height, expected_area", argvalues=[(5, 10, 50), (10, 20, 200)]
)
def test_rectangle(width, height, expected_area):
    """
    Test the calculate_area method of the Rectangle class.

    Args:
        width (int): The width of the rectangle.
        height (int): The height of the rectangle.
        expected_area (int): The expected area of the rectangle.

    Returns:
        None
    """
    rectangle = Rectangle(width, height)
    assert rectangle.calculate_area() == expected_area
