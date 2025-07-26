/*
 * Linear Search
 * 
 * Find an element within a list by
 * iterating one by one through the list
 * Worst-case time complexity of O(n)
 */

#include <stdio.h>

int linear_search(int arr[], int len, int search_number);

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

    // Size of array
    int len = (sizeof(integers) / sizeof(integers[0]));

    // get result of search
    int result = linear_search(integers, len, n);

    if (result != -1)
    {
        printf("%i Found at index %i\n", n, result);
    }
    else
    {
        printf("%i Not Found\n", n);
    }

 }

 int linear_search(int arr[], int len, int search_number)
 {
    // Search for number
    for (int i = 0; i < len; i++ )
    {
        if (arr[i] == search_number)
        {
            return i;
        }
    }

    return -1;
 }