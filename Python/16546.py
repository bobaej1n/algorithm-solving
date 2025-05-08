# Missing Runners

N = int(input())
nums = list(map(int, input().split()))

res = 0

for i in range(N - 1):
    res += (i + 1)
    res -= nums[i]

print(res + N)