/*
 * Binary Search
 * Faster than linear search however, requires a sorted array to work.
 * Halfs the array, checks the centre value of the array
 * If the target matches the middle value, return its index
 * If it is smaller than the centre it checks the next
 * left half of the array,
 * otherwise checks the right half of the array
 * and continues halving the search space.
 * 
 * Telephone book is a good example - it is already sorted A-Z
 * Finding a name is easy just open half the book again and again.
 * 
 * Worst-case time complexity is O(log2n) 
 */

#include <stdio.h>

int binarySearch(int arr[], int len, int search_number);

int main(void)
{
   // Sorted array of random numbers
    int integers[] = {
        18,
        19,
        22,
        28,
        42,
        48
    };

    // Number to search for
    int n = 48;

    // Array length
    int len = (sizeof(integers) / sizeof(integers[0]));

    int result = binarySearch(integers, len, n);

    if (result != -1)
    {
       printf("%i Found at index %i\n", n, result);
    }
    else
    {
        printf("%i Not Found\n", n);
    }

    return 0;
}

int binarySearch(int arr[], int len, int search_number)
{
    // Setup bounds of search
    int left = 0, right = len - 1;
    
    while (left <= right)
    {
        // iterate through sorted array

        int mid = left + (right - left) / 2;

        if (arr[mid] == search_number)
        {
            return mid;
        }
        
        else
        {
            if (arr[mid] < search_number)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }
    }
    return -1;
}