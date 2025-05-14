# 학번을 찾아줘!

T = int(input())
sub = list(map(int, input().split())) + [0] * (5 - T)

answer = 0

if sub[0] > sub[2]:
    answer += (sub[0] - sub[2]) * 508
else:
    answer += (sub[2] - sub[0]) * 108

if sub[1] > sub[3]:
    answer += (sub[1] - sub[3]) * 212
else:
    answer += (sub[3] - sub[1]) * 305

if sub[4] > 0:
    answer += sub[4] * 707

answer *= 4763

print(answer)