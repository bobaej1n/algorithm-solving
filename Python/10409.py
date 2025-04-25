# 서버

n, T = map(int, input().split())
tasks = list(input().split())

sum = 0
answer = 0

for i in tasks:
    if (sum + int(i) <= T):
        sum += int(i)
        answer += 1
    else:
        break

print(answer)