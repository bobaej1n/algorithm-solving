# 암호해독기

n = int(input())
nums = list(map(int, input().split()))
text = input()

result = []

for i in text:
    if i.isspace():
        result.append(0)
    elif i.islower():
        result.append(ord(i) - 70)
    elif i.upper():
        result.append(ord(i) - 64)
        
if sorted(nums) == sorted(result):
    print('y')
else:
    print('n')