# 팩토리얼

n = int(input())

answer = 1

if n > 0:
    for i in range(1, n + 1):
        answer *= i
        
print(answer)