/*
 * Linear Search
 * 
 * Find an element within a list
 * Worst-case time complexity of O(n)
 */

#include <stdio.h>

 int main(void)
 {
    // An array of integers
    int integers[] = {
        32,
        80,
        46,
        93,
        48,
        74,
    };

    // Number to search for
    int n = 48;

    // Search for number
    for (int i = 0, len = sizeof(integers) / sizeof(integers[0]); i < len; i++ )
    {
        if (integers[i] == n)
        {
            printf("%i Found\n", n);
            return 0;
        }
    }
    printf("%i Not Found\n", n);
    return 1;
 }