# 점심시간 레이스

n, m, k = map(int, input().split())
li = []

for i in range(k):
    f1, d1 = map(int, input().split())
    num = (f1 - 1) + (n - d1)
    li.append(num)
    
print(li.index(min(li)) + 1)