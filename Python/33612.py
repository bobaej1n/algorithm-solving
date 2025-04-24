# 피갤컵

N = int(input())

start_year = 2024
start_month = 8

total_months = (start_year * 12 + start_month - 1) + (N - 1) * 7

yyyy = total_months // 12
mm = total_months % 12 + 1

print(yyyy, mm)