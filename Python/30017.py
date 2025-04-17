# 치즈버거 만들기

A, B = map(int, input().split())

answer = 0

if A == B + 1:
	answer = A + B
elif A > B + 1:
    answer = (B + 1) + B
else:
    answer = A + (A - 1)
    
print(answer)