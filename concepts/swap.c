/*
 * Swap
 * Swaps two integers using pointers
 * Gives overview of how pointers work
 * variables are not passed by value but by reference
 * & is addressof operator
 * *ptr - pointer ptr can store the address of an integer 
 */

#include <stdio.h>

void swap(int* a, int* b);

int main(void)
{
    int x = 5;
    int y = 10;

    printf("x is %i, y is %i\n", x, y);

    swap(&x, &y);

    printf("x is %i, y is %i\n", x, y);
}

void swap(int* a, int* b)
{
    int tmp = *a;
    *a = *b;
    *b = tmp;
}