"""variables in python"""
# a = 2
# b = 10
# c = 0

"""functions in python"""
# def func():
#     return a + b

"""arrays in python"""
# arr = [0, 10, 12, 89]

"""for loop in python"""
# print('python for loop')
# length = len(arr)
# for i in range(length):
#     print(arr[i])

"""for each loop in python"""
# print('python forezach loop')
# for element in arr:
#     print(element)

"""while loop in python"""
# print('python while loop')
# i = 0
# while i < length:
#     print(arr[i])
#     i += 1

"""functions with parameters in python"""
# print('python addNumbers Function')
# def addNumbers(a, b):
#     return a + b
# print(addNumbers(20, 40))

"""classes in python"""
# class Test:
#     def __init__(self, name):
#         self.name = name

#     def sayHello(self):
#         return "Hello I'm " + self.name
    
# testClass = Test("bruno python")
# print(testClass.sayHello())

from py.Test import Test
from py.Test2 import Test2
test = Test("bruno python")
print(test.sayHello())

test2 = Test2("")
print(test2.sayAge())

