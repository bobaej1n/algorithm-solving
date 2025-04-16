# 상근이의 친구들

list = []

while True:
	M, F = map(int, input().split())
 
	if M == 0 and F == 0:
		break
	else:
		list.append(str(M + F))

print("\n".join(list))