# 노 땡스!

N = int(input())
nums = list(map(int, input().split()))

score = 0
group = []
pre = nums[0]

for i in nums:
    if i == pre + 1:
        group.append(i)
    else:
        if group:
            score += min(group)
        group = [i]
    pre = i

if group:
    score += min(group)
        
print(score)