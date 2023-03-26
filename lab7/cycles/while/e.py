n = int(input())
k = 1
count = 0
while k < n:
    k <<= 1
    count += 1
print(count)