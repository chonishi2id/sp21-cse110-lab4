## Part 1a 

1. Line 9 prints: "values added:  20"
2. Line 13 prints: "final result: 20"
3. Line 9 prints: "values added: 20"
4. Line 13 returns an error. This is because 'result' is not in scope so it isn't recognized as a valid parameter.
5. Line 9 returns an error. This is because you can't reassign 'result' with a new value since it is declared 'const'.
6. Line 13 returns an error because 'result' is not in scope so it isn't recognized as a valid parameter.

## Part 1b

1. Line 12 prints: "3". This is because it is outputting the current value of i which has counted three values in the *prices* array, hence has iterated around the for loop 4 times to get to a point where it is no longer less than the length of the *prices* array. Finally, since it is a var, the value is preserved even when called out of scope.
2. Line 13 prints: "150". This is because that is the most recent assigned value to *discountedPrices*. Also, since *discountedPrices* is a var, the value is preserved even when called out of scope.
3. Line 14 ptins: "150". This is because that is the most recent assigned value to *finalPrice*. Also, since *finalPrice* is a var, the most recent assigned value is preserved even when called out of scope.
4. The function will return the *discounted* array containing the values [50, 100, 150]. Since *discounted* is a var as well as all *finalPrice* values pushed into *discounted*, the array can properly contain all values and return.
5. We get an error because *i* is not in the same scope as 
   ```
   console.log(i);
   ```
6. We get an error because *discountedPrice* is not in the same scope as
   ```
   console.log(discountedPrice);
   ```
7. Line 14 prints: "150". This is because *finalPrice* was declared in the same scope as 
   ```
   console.log(finalPrice);
   ```
   so any value assignments made in the for-loop block was preserved.
8. The function will return the *discounted* array containing the values [50, 100, 150]. Since *discounted* was declared before the for-loop block as well as all *finalPrice* values pushed into *discounted*, the array can properly contain all values and return. 
9. We get an error because *i* is not in the same scope as 
   ```
   console.log(i);
   ```
10. Line 12 prints: "3". This is because even though we **const** declared *length* to equal the length of the *prices* array at the start, we made no other modifications to it and it was declared in the same scope as 
    ```
    console.log(length);
    ```
11. The function wil return the *discounted* array containing the values [50, 100, 150]. Since *discounted* was declared before the for-loop block, it is in the same scope as **return**. Also, though *discountedPrice* is declared with **const**, it is treated as a new variable declaration upon each iteration of the for-loop so we have no problems with 'reassigning' new values to *discountedPrice* every iteration to push onto *discounted*. Finally, **const** simply prevents reassigning values to a given variable. Modifying the array assigned to *discounted* is not a reassignment since we are modifying the object already assigned to *discounted*. As such, the function will safely return the *discounted* array with the functionally, correct values.
12. A. 
    ```
    student.name
    ```
    B. 
    ```
    student["Grad Year"]
    ```
    C.
    ```
    student.greeting()
    ```
    D.
    ```
    student["Favorite Teacher"].name
    ```
    E.
    ```
    student.courseLoad[0]
    ```
13. A. We get the string "32". The '+' operator can also mean 'to append' to a string. Since "3" is a string and appendation takes precedence over addition, we get "32".
    B. We get the number value '1'. The '-' operator can only mean 'subtract' so since we are subtracting the numeric value '2' from the string value "3", "3" gets converted to a number '3' and gives us our output '1'. 
    C. We get the number value '3'. Adding *null* to a numeric value basically means adding 0 to it so we return the same number value we started with.
    D. We get the string "3null". Adding *null* to a string value appends the string to incorporate the character sequence "null" so we get the aforementioned output.
    E. We get the number value '4'. As mentioned in the writeup, adding a numeric value to true would be like adding 1 to said numeric value since true maps to 1.
    F. We get the number value '0'. False maps to 0 and null maps to 0. Adding 0 to 0 would equal 0 so we get our output, 0.
    G. We get the string "3undefined". The '+' operator can also signify appending a string. Since "3" is a string value and we're appending *undefined* to it, we get the aforementioned output.
    H. We get the output 'NAN'. We can't subtract *undefined* from a string or number and as javascript.info cites, *undefined* converts to 'NAN'.

14. A. We get 'true'. This is because the string value "2" gets converted to a number and comparing 
       ```
       2 > 1
       ```
       should output us a 'true'.
    B. We get 'false'. Here we are comparing two strings so Javascript compares the "2" in "2" to the "1" in "12" and finds that "2" is greater than "1", hence it returns 'false'.
    C. We get 'true'. The string "2" gets converted to a number and comparing 2 to 2 would give us a 'true'.
    D. We get 'false'. Three '=' operators checks for ***strict*** equality. Since 2 and "2" are of different types, they are not equal. As such, we get a 'false'.
    E. We get 'false'. 'true' as a boolean maps to the numeric value '1'. 
       ```
       1 == 2
       ```
       would net us a 'false'.
    F. We get 'true'. In Javascript, a non-empty string is always 'true'. Hence, we are strictly comparing 'true' to 'true' so we get 'true'.

15. The '==' operator checks for loose equality. This means it will convert data types as is most convenient to see if a numeric value is equal to a string, a boolean, etc and vice versa. The '===' operator checks for ***strict*** equality which means it will also check for type equality. With the '===' operator, you cannot compare an int to a string or to a boolean because they are of different types. 

17. We get the new array [2, 4, 6]. We first create a new array under *modifyArray*. Then for the first index of the given array, we load the value into *doSomething*. We do this for the remaining values of the given array. Then once we step past *modifyArray* and get to *doSomething*, we process the value in the first index '1' and return '2'. We then go back to *modifyArray* and push '2' to *newArr*. We process the remaining values in a similar way.

19. The console outputs: '1' '4' '3' '2' in that order.