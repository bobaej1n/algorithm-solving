# 점수계산

N = int(input())
list = list(map(int, input().split()))

pre = 0
score = 0

for i in list:
	if i == 1:
		pre += 1
		score += pre
	else:
		pre = 0

print(score)