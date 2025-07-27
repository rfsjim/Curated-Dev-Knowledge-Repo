/*
 * Stack
 * A TypeScript implementation of a stack
 */

class Stack<T>
{
    private items: T[] = [];

    push(item: T)
    {
        this.items.push(item);
    }

    pop(): T | undefined
    {
        return this.items.pop();
    }

    peek():T | undefined
    {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean
    {
        return this.items.length === 0;
    }

    size(): number
    {
        return this.items.length;
    }
}

// Example usage
const s = new Stack<number>();

s.push(5);
s.push(9);

console.log(s.pop());       // 5
console.log(s.peek());      // 9

console.log(s.isEmpty());   // false
console.log(s.size());      // 1




