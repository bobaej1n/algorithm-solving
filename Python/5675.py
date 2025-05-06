# 시침과 분침

import sys

angs = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174, 180]

for i in sys.stdin.readlines():
	if int(i.strip()) in angs:
		print("Y")
	else:
		print("N")