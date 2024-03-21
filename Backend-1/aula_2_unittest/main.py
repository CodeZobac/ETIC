import unittest


def solution(nums: list[int], target: int) -> list[int]:
    """
    Finds two numbers in the given list that add up to the target value.

    Args:
        nums (list[int]): The list of numbers to search.
        target (int): The target value to find the sum of two numbers.

    Returns:
        list[int]: A list containing the indices of the two numbers that add up to the target value.

    Raises:
        Exception: If no two numbers are found that add up to the target value.
    """
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    raise Exception("No two sum solution")


class TestTwoSum(unittest.TestCase):
    """
    Test class for the solution function in main.py.
    """

    def test_case_1(self):
        """
        Test case 1 for the solution function.
        """
        nums = [2, 7, 11, 15]
        target = 9
        result = solution(nums=nums, target=target)
        solution_target = [0, 1]
        self.assertEqual(result, solution_target)

    def test_case_2(self):
        """
        Test case 2 for the solution function.
        """
        nums = [3, 2, 4]
        target = 6
        result = solution(nums=nums, target=target)
        solution_target = [1, 2]
        self.assertEqual(result, solution_target)

    def test_case_3(self):
        """
        Test case 3 for the solution function.
        """
        nums = [3, 3]
        target = 6
        result = solution(nums=nums, target=target)
        solution_target = [0, 1]
        self.assertEqual(result, solution_target)


if __name__ == "__main__":
    unittest.main()
