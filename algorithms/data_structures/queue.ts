/*
 * Queue
 * A TypeScript Class Based Queue Implementation
 */

class Queue<T>
{
    private items: T[] = [];

    enqueue(item: T)
    {
        this.items.push(item);
    }

    dequeue(): T | undefined
    {
        return this.items.shift();
    }

    peek(): T | undefined
    {
        return this.items[0];
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

// example usage

const q = new Queue<number>();

q.enqueue(10);
q.enqueue(20);

console.log(q.dequeue());   // 10
console.log(q.peek());      // 20

console.log(q.isEmpty());   // false
console.log(q.size());      // 1