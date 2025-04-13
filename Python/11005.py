# 진법 변환 2

N, B = map(int, input().split(" "))

arr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
answer = ""

while N :
    answer += str(arr[N % B])
    N //= B

print(answer[::-1])