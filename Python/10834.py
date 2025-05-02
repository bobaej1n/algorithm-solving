# 벨트

N = int(input())

r = 0
answer = 1

for _ in range(N):
	a, b, s = map(int, input().split())

	if s == 1:
		r = (r + 1) % 2
	
	answer = (answer * b) / A

print(r, int(answer))