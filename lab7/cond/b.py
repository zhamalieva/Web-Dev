a = int(input())
if(a%4==0):
    if(a%100==0):
        if(a%400==0):
            print("YES")
        else: print("NO")
    else: print("YES")
else: print("NO")