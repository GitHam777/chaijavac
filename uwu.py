import math

while True:
    print("Choose among them: ")
    print("1. Check if a number is a buzz number")
    print("2. Find the GCD) of two numbers")
    print("3. Exit")
    
    choice = input("Enter your choice: ")
    
    if choice == '1':
        number = int(input("Enter a number: "))
        if number % 7 == 0 or number % 10 == 7:
            print("It is a buzz number.")
        else:
            print("It is not a buzz number.")
    
    elif choice == '2':
        num1 = int(input("Enter the first number: "))
        num2 = int(input("Enter the second number: "))
        gcd = math.gcd(num1, num2)
        print(f"The GCD of {num1} and {num2} is {gcd}.")
    
    elif choice == '3':
        print("Thank You!")
        break
    
    else:
        print("Invalid choice.")