/*
 * Queue
 * Example of queue implemented in C
 */

#include <stdio.h>
#include <stdbool.h>

#define CAPACITY 100

typedef struct 
{
    int items[CAPACITY];
    int front;
    int rear;
} Queue;

void initQueue(Queue* q)
{
    q -> front = 0;
    q -> rear = -1;
}

bool isEmpty(Queue* q)
{
    // Test if queue has no elements
    return q -> rear < q -> front;
}

int size(Queue* q)
{
    // Returns the size of the queue
    return q -> rear - q -> front + 1;
}

bool enqueue(Queue* q, int value)
{
    // Add element to the rear
    if (q -> rear >= CAPACITY - 1 )
    {
        // Queue is full
        return false;
    } 
    q -> items[++q -> rear] = value;
    return true;
}

bool dequeue(Queue* q, int* out)
{
    // Remove and return the element at the front
    if (isEmpty(q))
    {
        // Queue is empty nothing can be removed from it
        return false;
    }
    *out = q -> items[q -> front++];
    return true;
}

bool peek(Queue* q, int* out)
{
    // Look at the element at the front without removing it
    if (isEmpty(q))
    {
        // Queue is empty nothing to return
        return false;
    }
    *out = q -> items[q -> front];
    return true;
}

// Example usage
int main(void)
{
    Queue q;
    initQueue(&q);

    enqueue(&q, 10);
    enqueue(&q, 20);
    
    int value;
    dequeue(&q, &value);
    
    printf("Dequeued: %d\n", value);    // 10
    
    peek(&q, &value);
    printf("Peek: %d\n", value);        // 20

    printf("Is Empty: %d\n", isEmpty(&q));    // false
    printf("Size: %d\n", size(&q));    // 1
}