from turtle import Turtle
import random


class Food(Turtle):
    """
    A class representing food in a game.

    Attributes:
    - shape: The shape of the food (circle).
    - penup: Whether the pen is up or down.
    - shapesize: The size of the food.
    - color: The color of the food.
    - speed: The speed of the food.
    """

    def __init__(self):
        super().__init__()
        self.shape("circle")
        self.penup()
        self.shapesize(stretch_wid=0.5, stretch_len=0.5)
        self.color("blue")
        self.speed("fastest")
        self.refresh()

    def refresh(self):
        """
        Moves the food to a random position on the screen.
        """
        random_x = random.randint(-280, 280)
        random_y = random.randint(-280, 280)
        self.goto(random_x, random_y)
