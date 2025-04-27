# 회사에 있는 사람

n = int(input())
dic = {}

for _ in range(n):
	name, state = input().split()
	dic[name] = state

	if state == "leave":
		del dic[name]

sortedDic = sorted(dic.items(), reverse = True)
dic = dict(sortedDic)

for key in dic.keys():
	print(key)