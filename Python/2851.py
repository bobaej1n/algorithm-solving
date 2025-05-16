# 슈퍼 마리오

import sys
input = sys.stdin.readline

answer = 0
mushrooms = []

for _ in range(10):
    mushrooms.append(int(input()))

for i in mushrooms:
    answer += i
    if answer >= 100:
        if answer - 100 > 100 - (answer - i):
            answer -= i
            break

print(answer)