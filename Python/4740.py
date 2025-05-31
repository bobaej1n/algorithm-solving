# 거울, 오! 거울

while True:
    sen = str(input())
    
    if sen == "***":
        break;
    else:
        print(''.join(reversed(sen)))