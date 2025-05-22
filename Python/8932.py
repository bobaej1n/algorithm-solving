# 7종 경기

for _ in range(int(input())) :
    scores = [*map(int, input().split())]
    print(int(9.23076 * ((26.7 - scores[0]) ** 1.835))
          + int(1.84523 * ((scores[1] - 75) ** 1.348))
          + int(56.0211 * ((scores[2] - 1.5) ** 1.05))
          + int(4.99087 * ((42.5 - scores[3]) ** 1.81))
          + int(0.188807 * ((scores[4] - 210) ** 1.41))
          + int(15.9803 * ((scores[5] - 3.8) ** 1.04))
          + int(0.11193 * ((254 - scores[6]) ** 1.88)))