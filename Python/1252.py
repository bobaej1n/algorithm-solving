# 이진수 덧셈

bin1, bin2 = map(lambda x: int(x, 2), input().split())

answer = bin1 + bin2

print(bin(answer)[2:])