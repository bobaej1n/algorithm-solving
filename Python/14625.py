# 냉동식품

start_hour, start_min = map(int, input().split())
end_hour, end_min = map(int, input().split())

N = input()
count = 0

while True:
	if (N in str(start_hour).zfill(2)) or (N in str(start_min).zfill(2)):
		count += 1

	if (start_hour == end_hour) and (start_min == end_min):
		break

	start_min += 1

	if 59 < start_min:
		start_hour += 1
		start_min = 0
    
	if 23 < start_hour:
		break

print(count)