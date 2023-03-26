if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    l = student_marks[query_name]
    sum = 0
    for i in l:
        sum += i
    res = sum / len(l) 
    print('%.2f'% res)