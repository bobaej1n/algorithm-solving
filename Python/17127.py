# 벚꽃이 정보섬에 피어난 이유

N = int(input())
nums = list(map(int, input().split()))

answer = 0
ires = 1

for i in range(0, N - 3):
    ires *= nums[i]
    jres = 1

    for j in range(i + 1, N - 2):
        jres *= nums[j]
        kres = 1

        for k in range(j + 1, N - 1):
            kres *= nums[k]
            lres = 1

            for l in range(k + 1, N):
                lres *= nums[l]
                
            answer = max(answer, ires + jres + kres + lres)

print(answer)