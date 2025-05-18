# 준석이의 수학 숙제

T = int(input())
N = list(map(int, input().split()))

answerList = [0] * 80001
sum = 0

for i in range(80001):
    if i % 3 == 0 or i % 7 == 0:
        sum += i
    answerList[i] = sum

for j in N:
    print(answerList[j])