def transform_string(s):
    n = len(s)
    if n % 15 == 0:
        return ' '.join(str(ord(char)) for char in reversed(s))
    elif n % 3 == 0:
        return s[::-1]
    elif n % 5 == 0:
        return ' '.join(str(ord(char)) for char in s)
    else:
        return s

# Example usage:
print(transform_string("Hamburger"))        # Output: "regrubmaH"
print(transform_string("Pizza"))            # Output: "80 105 122 122 97"
print(transform_string("Chocolate Chip Cookie"))  # Output: "eikooCpihCetalocohC"
