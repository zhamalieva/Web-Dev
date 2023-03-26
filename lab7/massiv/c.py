n = int(input())
a = [int(i) for i in input().split()]
k = 0
for i in range(n):
    if(a[i] > 0):
        k += 1

print(k)
