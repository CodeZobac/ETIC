from turtle import Turtle

sarting_positions = [(0, 0), (-20, 0), (-40, 0)]
move_distance = 20
up = 90
down = 270
left = 180
right = 0

class Snake:
    """
    Represents a snake object in the game.

    Attributes:
        segments (list): A list of turtle segments that make up the snake.
        head (Turtle): The head segment of the snake.

    Methods:
        __init__(): Initializes a new instance of the Snake class.
        create_snake(): Creates the initial segments of the snake.
        add_segment(position): Adds a new segment to the snake.
        extend(): Extends the length of the snake by adding a new segment.
        move(): Moves the snake forward.
        up(): Changes the snake's direction to up.
        down(): Changes the snake's direction to down.
        left(): Changes the snake's direction to left.
        right(): Changes the snake's direction to right.
    """

    def __init__(self):
        """
        Initializes a new instance of the Snake class.
        """
        self.segments = []
        self.create_snake()
        self.head = self.segments[0]

    def create_snake(self):
        """
        Creates the initial segments of the snake.
        """
        for position in sarting_positions:
            self.add_segment(position)

    def add_segment(self, position):
        """
        Adds a new segment to the snake.

        Args:
            position (tuple): The position to add the new segment.
        """
        new_segment = Turtle("square")
        new_segment.color("white")
        new_segment.penup()
        new_segment.goto(position)
        self.segments.append(new_segment)

    def extend(self):
        """
        Extends the length of the snake by adding a new segment.
        """
        self.add_segment(self.segments[-1].position())

    def move(self):
        """
        Moves the snake forward.
        """
        for seg_num in range(len(self.segments) - 1, 0, -1):
            new_x = self.segments[seg_num - 1].xcor()
            new_y = self.segments[seg_num - 1].ycor()
            self.segments[seg_num].goto(new_x, new_y)
        self.head.forward(move_distance)

    def up(self):
        if self.head.heading() != down:
            self.head.setheading(up)

    def down(self):
        if self.head.heading() != up:
            self.head.setheading(down)

    def left(self):
        if self.head.heading() != right:
            self.head.setheading(left)

    def right(self):
        if self.head.heading() != left:
            self.head.setheading(right)