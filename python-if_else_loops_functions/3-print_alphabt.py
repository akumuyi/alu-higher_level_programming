output = ""
for letter in range(ord('a'), ord('z') + 1):
    if chr(letter) not in ['e', 'q']:
        output += chr(letter)

print("{}".format(output), end='')
