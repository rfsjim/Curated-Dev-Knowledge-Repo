/*
 * Bubble Sort
 * Repeatedly swap elements to bubble large elements to the end
 * The further sorted it becomes it reduces how many pairs that need
 * to be compared
 * 
 * Worst-case time complexity of O(n2)
 */

 #include <stdbool.h>
 #include <stdio.h>

void bubble_sort(int arr[], int N);
void print_array(int arr[], int len);
void swap(int arr[], int a, int b);

 int main(void)
 {
    // array of random integers
    int integers[] = {
        6,
        48,
        98,
        53,
        94,
        13,
        41,
        52,
        18,
        67
    };

    // array size
    int len = (sizeof(integers) / sizeof(integers[0]));

    printf("Unsorted Array: \n");
    print_array(integers, len);

    bubble_sort(integers, len);

    printf("Sorted Array: \n");
    print_array(integers, len);

    return 0;
 }

 void bubble_sort(int arr[], int N)
 {
    for (int i = 0; i < N - 1; i++)
    {
        bool swapped = false;

        for (int j = 0; j < N - i - 1; j++)
        {
            if (arr[j] > arr[j+1])
            {
                // swap
                swap(arr, j, j+1);
                swapped = true;
            }
        }

        if (!swapped)
        {
            break;
        }
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

void swap(int arr[], int a, int b)
{
    // given two indexes as ints swap,
    // their position in array

    int temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}