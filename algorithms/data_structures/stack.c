/*
 * Stack
 * C Implementation of Stack
 */

#include <stdio.h>
#include <stdbool.h>

#define CAPACITY 100

typedef struct
{
    int items[CAPACITY];
    int top;
} Stack;

void initStack(Stack* s)
{
    s -> top = -1;
}

bool isEmpty(Stack* s)
{
    return s -> top == -1;
}

int size(Stack* s)
{
    return s -> top + 1;
}

bool push(Stack* s, int value)
{
    if (s -> top >= CAPACITY - 1)
    {
        // stack is full don't push
        return false;
    }

    s -> items[++s -> top] = value;
    return true;
}

bool pop(Stack* s, int* out)
{
    if (isEmpty(s))
    {
        // Stack is empty can't pop
        return false;
    }

    *out = s -> items[s -> top--];
    return true;
}

bool peek(Stack* s, int* out)
{
    if (isEmpty(s))
    {
        // Stack is empty can't peek
        return false;
    }

    *out = s -> items[s -> top];
    return true;
}

// Example usage

int main(void)
{
    Stack s;
    initStack(&s);

    push(&s, 42);
    push(&s, 7);

    int value;

    pop(&s, &value);
    
    printf("Popped: %d\n", value);          // 7

    peek(&s, &value);

    printf("Peek: %d\n", value);            // 42

    printf("Is Empty: %d\n", isEmpty(&s));    // false
    printf("Size: %d\n", size(&s));         // 1
}