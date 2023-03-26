a=input()
b=[int(s) for s in a.split()]
for i in b:
    if int(i)%2 == 0:
       print(i, end=' ')