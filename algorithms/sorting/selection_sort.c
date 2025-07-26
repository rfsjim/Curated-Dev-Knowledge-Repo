/*
 * Selection Sort
 * Finds the lowest value in an array and
 * moves it to the front of the array
 * Slow as it iterates through the array again and again
 * moving the next lowest value to the front until it is sorted
 * Instead of shifting, swap the lowest value with the first value
 * 
 * Worst-case time complexity is O(n2) 
 */

#include <stdio.h>

 void print_array(int arr[], int len);
 void selection_sort(int arr[], int N);
 void swap(int a, int b, int arr[]);

 int main(void)
 {
    // array of random integers
    int integers[] = {
        82,
        80,
        3,
        91,
        54,
        19,
        11
    };

    // array size
    int len = (sizeof(integers) / sizeof(integers[0]));

    // print unsorted array
    printf("Unsorted array: \n");
    print_array(integers, len);

    // sort array
    selection_sort(integers, len);

    // print sorted array
    printf("Sorted array: \n");
    print_array(integers, len);

    return 0;
 }

void print_array(int arr[], int len)
{
    for (int i = 0; i < len; i++)
    {
        printf("%i ", arr[i]);
    }

    printf("\n");
}

 void selection_sort(int arr[], int N)
 {
    /*
     * start with the entire array unsorted and one by one
     * sort items
     * doesn't need to return anything as
     * arrays are past as pointer references not values
     * so editing the array edits the actual array
     */

     // i travels to the second last index in the array
     for (int i = 0; i < N -1; i++)
     {
        // find minimum int
        int min_index = i;

        // j travels to the last index of the array starting at index i + 1
        for (int j = i + 1; j < N; j++)
        {
            if (arr[j] < arr[min_index])
            {
                min_index = j;
            }
        }

        /*
         * minimum index found,
         * Instead of shifting,
         * swap the lowest value with the first value
         */
        swap(min_index, i, arr);
     }
 }
 
  void swap(int a, int b, int arr[])
  {
    // given two indexes as ints swap,
    // their position in array

    int temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }