# 공약수

import math

n = int(input())
numbers = list(map(int, input().split()))

gcd = numbers[0]
for i in range(1, n):
    gcd = math.gcd(gcd, numbers[i])

divisors = set()

for i in range(1, int(gcd ** 0.5) + 1):
    if gcd % i == 0:
        divisors.add(i)
        divisors.add(gcd // i)

for d in sorted(divisors):
    print(d)