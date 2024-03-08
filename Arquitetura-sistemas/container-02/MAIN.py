alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]


def caeser(direction, text, shift):
    message = ""
    if direction == "decode":
        shift = -shift
    for i in text:
        if i in alphabet:
            position = alphabet.index(i)
            new_position = position + shift
            message += alphabet[new_position]
        else:
            message += i

    print("The {}d text is {}\n".format(direction, message))


while True:

    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
    text = input("Type your message:\n").lower()
    shift = int(input("Type the shift number:\n"))
    shift = shift % 26
    caeser(direction, text, shift)
    restart = input(
        "Type 'yes' if you want to go again. Otherwise type 'no'.\n"
    ).lower()
    if restart == "no":
        print("Goodbye")
        break
