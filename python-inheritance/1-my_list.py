#!/usr/bin/python3
'''Defines a class called MyList
'''


class MyList(list):
    """print_sorted version of list"""
    def print_sorted(self):
        return sorted(self)

