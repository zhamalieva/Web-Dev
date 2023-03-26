def split_and_join(line):
    # write your code here
    res = line.split()
    res = '-'.join(res)
    return res

if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)