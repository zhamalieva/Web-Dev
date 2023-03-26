import textwrap

def wrap(string, max_width):
    t = ''
    start, end = 0, max_width
    while end < len(string)-1:
        t += string[start:end]+'\n'
        start = end
        end = end + max_width
        if end >= len(string)-1:
            t += string[start:]
    return t
        

if __name__ == '__main__':
    string, max_width = input(), int(input())
    result = wrap(string, max_width)
    print(result)