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