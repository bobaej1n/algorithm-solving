# 교수님 그림이 깨지는데요?

N, K = map(int, input().split())

bitmap = [input().split() for _ in range(N)]

for row in bitmap:
	tmp = []

	for col in row:
		tmp += list(col * K)
	
	for _ in range(K):
		print(*tmp)