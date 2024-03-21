import unittest


class Rectangle:
    """
    A class representing a rectangle.
    """

    def calculate_area(self, width: int, height: int):
        """
        Calculates the area of the rectangle.

        Args:
            width (int): The width of the rectangle.
            height (int): The height of the rectangle.

        Returns:
            int: The area of the rectangle.
        """
        return width * height

    def calculate_perimeter(self, width: int, height: int):
        """
        Calculates the perimeter of the rectangle.

        Args:
            width (int): The width of the rectangle.
            height (int): The height of the rectangle.

        Returns:
            int: The perimeter of the rectangle.
        """
        return 2 * (width + height)


class TestRectangle(unittest.TestCase):
    def test_area(self):
        rectangle = Rectangle()
        target = 25
        self.assertEqual(rectangle.calculate_area(5, 5), target)

    def test_perimeter(self):
        rectangle = Rectangle()
        target = 20
        self.assertEqual(rectangle.calculate_perimeter(5, 5), target)


if __name__ == "__main__":
    unittest.main()
