# 구구단표

n = int(input())

result = 0

for i in range(1, 10) :
	if n % i == 0 and n // i <= 9 :
		result = 1
		break

print(1) if result == 1 else print(0)