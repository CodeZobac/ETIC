import unittest


def main():
    ammount = int(input("Enter the ammount of numbers: "))

    numbers = []

    for i in range(ammount):
        number = int(input("Enter number: "))
        numbers.append(number)

    return f"The numbers are: {numbers}"


class TestEx1(unittest.TestCase):
    def test_main(self):
        self.assertEqual(main(), "The numbers are: [1, 2, 3]")


if __name__ == "__main__":
    TestEx1().test_main()
