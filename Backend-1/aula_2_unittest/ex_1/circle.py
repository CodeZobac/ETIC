import unittest


class Circle:
    """
    Represents a circle with a given radius.

    Attributes:
        radius (float): The radius of the circle.
    """

    def __init__(self, radius: int):
        self.radius = radius

    def area(self):
        """
        Calculates the area of the circle.

        Returns:
            float: The area of the circle.
        """
        return 3.14159 * self.radius**2

    def perimeter(self):
        """
        Calculates the perimeter of the circle.

        Returns:
            float: The perimeter of the circle.
        """
        return 2 * 3.14159 * self.radius


class TestCircle(unittest.TestCase):
    def test_area(self):
        circle = Circle(5)
        target = 78.53975
        self.assertEqual(circle.area(), target)

    def test_perimeter(self):
        circle = Circle(5)
        target = 31.4159
        self.assertEqual(circle.perimeter(), target)


if __name__ == "__main__":
    unittest.main()
