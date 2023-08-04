#!/usr/bin/python3
import urllib.request
import urllib.error
import sys

def fetch_url_content(url):
    try:
        with urllib.request.urlopen(url) as response:
            print("Response body:")
            content = response.read().decode('utf-8')
            print(content)
    except urllib.error.HTTPError as e:
        print(f"Error code: {e.code}")
    except urllib.error.URLError as e:
        print(f"Error occurred: {e.reason}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script_name.py <URL>")
    else:
        url = sys.argv[1]
        fetch_url_content(url)

