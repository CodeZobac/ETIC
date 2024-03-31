import unittest


class Rectangle:
    """
    A class representing a rectangle.
    """

    def __init__(self, width, height):
        """
        Initializes the rectangle.

        Args:
            width (int): The width of the rectangle.
            height (int): The height of the rectangle.
        """
        self.width = width
        self.height = height

    def calculate_area(self):
        """
        Calculates the area of the rectangle.

        Args:
            width (int): The width of the rectangle.
            height (int): The height of the rectangle.

        Returns:
            int: The area of the rectangle.
        """
        return self.width * self.height

    def calculate_perimeter(self):
        """
        Calculates the perimeter of the rectangle.

        Args:
            width (int): The width of the rectangle.
            height (int): The height of the rectangle.

        Returns:
            int: The perimeter of the rectangle.
        """
        return 2 * (self.width + self.height)


class TestRectangle(unittest.TestCase):
    def test_area(self):
        rectangle = Rectangle(5, 5)
        target = 25
        self.assertEqual(rectangle.calculate_area(), target)

    def test_perimeter(self):
        rectangle = Rectangle(5, 5)
        target = 20
        self.assertEqual(rectangle.calculate_perimeter(), target)


if __name__ == "__main__":
    unittest.main()
