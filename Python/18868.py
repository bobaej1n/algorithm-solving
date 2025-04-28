# 멀티버스 Ⅰ

M, N = map(int, input().split())
universe = [list(map(int, input().split())) for _ in range(M)]
answer = 0

for planet in range(M):
    for i in range(M):
        sortedArr = sorted(universe[i])
        sortedBySize = []
        
        for j in universe[i]:
            sortedBySize.append(sortedArr.index(j) + 1)
        
        universe[i] = sortedBySize

for i in range(M - 1):
    for j in range(i + 1, M):
        if universe[i] == universe[j]:
            answer += 1

print(answer)