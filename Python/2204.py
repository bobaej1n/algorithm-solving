# 도비의 난독증 테스트

while True:
    n = int(input())
    
    if n == 0:
        break
    
    words = [str(input()) for _ in range(n)]
    sortedWords = words.sort(key=str.lower)
    
    print(words[0])