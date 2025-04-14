# 전국 대학생 프로그래밍 대회 동아리 연합

N, B, H, W = map(int, input().split(" "))

min_cost = float('inf')

for _ in range(H):
	price_per_person = int(input())
	weeks = list(map(int, input().split(" ")))

	if any(beds >= N for beds in weeks) :
		total_cost = price_per_person * N

		if total_cost <= B :
			min_cost = min(min_cost, total_cost)

print(min_cost if min_cost != float('inf') else "stay home")