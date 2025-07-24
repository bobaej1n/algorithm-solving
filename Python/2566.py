# 최댓값

answer = -1

for i in range(9):
    numbers = list(map(int, input().split()))
    maxNum = max(numbers)
    
    if maxNum > answer:
        answer = maxNum
        row = i + 1
        col = numbers.index(maxNum) + 1

print(answer)
print(row, col)