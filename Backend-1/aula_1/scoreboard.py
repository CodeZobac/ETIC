from turtle import Turtle

align = "center"
font = ("Arial", 24, "normal")


class Scoreboard(Turtle):
    """
    Represents the scoreboard in the game.

    Attributes:
    - score: An integer representing the current score.
    """

    def __init__(self):
        super().__init__()
        self.score = 0
        self.color("white")
        self.penup()
        self.hideturtle()
        self.goto(0, 260)
        self.update_scoreboard()

    def update_scoreboard(self):
        """
        Updates the scoreboard with the current score.
        """
        self.write(f"Score: {self.score}", align=align, font=font)

    def increase_score(self):
        """
        Increases the score by 1 and updates the scoreboard.
        """
        self.score += 1
        self.clear()
        self.update_scoreboard()

    def game_over(self):
        """
        Displays the "GAME OVER" message on the screen.
        """
        self.goto(0, 0)
        self.write("GAME OVER", align=align, font=font)
