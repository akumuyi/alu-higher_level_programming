#!/usr/bin/python3
"""
Fetches a URL and displays the body of the response with tabulation.

Usage: ./2-status.py
"""
import requests


def fetch_and_display_status():
    """
    Fetches the body of the URL response and displays it with tabulation.

    Returns:
        str: The body of the response.
    """
    url = "https://alu-intranet.hbtn.io/status"
    response = requests.get(url)

    print("Body response:")
    print("\t- type: {}".format(type(response.text)))
    print("\t- content: {}".format(response.text))


if __name__ == "__main__":
    fetch_and_display_status()
