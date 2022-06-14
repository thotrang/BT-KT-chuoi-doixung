export class Queue<T> {
    container: T[] = [];
    
    constructor() {
    }
    dequeue(): T | undefined {
        return this.container.shift();
    }
    enqueue(item: T): void {
        this.container.push(item);
    }
    size(): number {
        return this.container.length
    }
}