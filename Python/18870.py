# 좌표 압축

N = int(input())
points = list(map(int, input().split()))

sortedPoints = sorted(set(points))
dic = {sortedPoints[i]: i for i in range(len(sortedPoints))}

for i in points:
    print(dic[i], end=" ")