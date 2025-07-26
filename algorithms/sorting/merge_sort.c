/*
 * Merge Sort
 * Uses Recursion to make a more efficient sort algorithm
 * If only one number
 *  Quit
 * Else
 *  Sort left half of number
 *  Sort right half of number
 *  Merge sorted halves
 * 
 * Divide - The algorithm starts with breaking up the array
 * into smaller and smaller pieces until one such sub-array
 * only consists of one element.
 * 
 * Conquer: The algorithm merges the small pieces of the array
 * back together by putting the lowest values first,
 * resulting in a sorted array.
 * 
 * Worst-case time complexity of O(n⋅log n)
 */

 #include <stdio.h>

 void merge(int arr[], int left, int mid, int right);
 void merge_sort(int arr[], int left, int right);
 void print_array(int arr[], int len);

 int main(void)
 {
    int integers[] = {
        39,
        27,
        70,
        3,
        86,
        72,
        52,
        75,
        4,
        95,
        54,
        74,
        44,
        73,
        29,
        6,
        58,
        83,
        85,
        91
    };

    // array size
    int len = (sizeof(integers) / sizeof(integers[0]));

    printf("Unsorted Array: \n");
    print_array(integers, len);

    if (len > 1)
    {
        merge_sort(integers, 0, len-1);
    }

    printf("Sorted Array: \n");
    print_array(integers, len);

    return 0;
 }

// Merges two subarrays of arr[].
// First subarray is arr[left..mid]
// Second subarray is arr[mid+1..right]
 void merge(int arr[], int left, int mid, int right)
{
    // initate counters and lengths of sub arrays
    int i, j, k;
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // create temp arrays
    int leftArr[n1], rightArr[n2];

    // copy data to temp arrays
    for (i = 0; i < n1; i++)
    {
        leftArr[i] = arr[left + i];
    }
    
    for (j = 0; j < n2; j++)
    {
        rightArr[j] = arr[mid + 1 + j];
    }

    // Merge the temporary arrays back into arr[left..right]
    i = 0;
    j = 0;
    k = left;

    while (i < n1 && j < n2)
    {
        if (leftArr[i] <= rightArr[j])
        {
            arr[k] = leftArr[i];
            i++;
        }
        else
        {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of leftArr[], if any
    while (i < n1)
    {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    // Copy the remaining elements of rightArr[], if any
    while (j < n2)
    {
        arr[k] = rightArr[j];
        j++;
        k++;
    }

}

// The subarray to be sorted is in the index range [left-right]
 void merge_sort(int arr[], int left, int right)
{
    if (left < right)
    {
        // Get mid point
        int mid = left + (right - left) /2;

        // sort first and second halves
        merge_sort(arr, left, mid);
        merge_sort(arr, mid + 1, right);

        // merge the sorted halves
        merge(arr, left, mid, right);
    }
}

 void print_array(int arr[], int len)
{
    for (int i = 0; i < len; i++)
    {
        printf("%i ", arr[i]);
    }

    printf("\n");
}