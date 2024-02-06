from py.mainTest import MainTest

class Test2(MainTest):
    def __init__(self, name):
        super().__init__(name)

    def sayAge(self):
        return "Hello i'm " + super().sayAge()