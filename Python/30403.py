# 무지개 만들기

lowerRainbow = ['r', 'o', 'y', 'g', 'b', 'i', 'v']
upperRainbow = ['R', 'O', 'Y', 'G', 'B', 'I', 'V']

lowers = []
uppers = []

lowerFlag = False
upperFlag = False

N = int(input())
inputStr = input()

for i in inputStr:
    if i.islower():
        lowers.append(i)
    elif i.isupper():
        uppers.append(i)

if all(s in lowers for s in lowerRainbow):
    lowerFlag = True
if all(s in uppers for s in upperRainbow):
    upperFlag = True

if lowerFlag == True and upperFlag == False :
    print('yes')
elif lowerFlag == False and upperFlag == True:
    print('YES')
elif lowerFlag == True and upperFlag == True:
    print('YeS')
else:
    print('NO!')