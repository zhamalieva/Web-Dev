def func(a, b):
    sum = a + b
    if (sum == 2 or sum == 0):
        return 0
    return 1
a = input().split()
print(func(int(a[0]), int(a[1])))