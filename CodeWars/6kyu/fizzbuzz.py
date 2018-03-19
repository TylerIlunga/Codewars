def solution(number):
    #number = int(raw_input("Welcome to FizzBuzz! [Enter] your number "))
    #number += 1

    a = 0
    b = 0
    c = 0

    for i in range(1, number):
        if (i % 15 == 0):
            c += 1
        elif (i % 5 == 0):
            b += 1
        elif (i % 3 == 0):
            a += 1
            
    return [a, b, c]

print solution(20)
