class circularQueue{
    constructor(capacity){
        this.item = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }
    isFull(){
        return this.currentLength === this.capacity;
    }
    isEmpty(){
        return this.currentLength === 0;
    }
    enqueue(item){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity;
            this.item[this.rear] = item;
            this.currentLength += 1;
            if(this.front === -1){
                this.front = this.rear;
            }
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const item = this.item[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if(this.isEmpty()){
            this.rear = -1;
            this.front = -1;
        }
        return item;
    }
    peek(){
        if(!this.isEmpty()){
            return this.item[this.front];
        }
        return null;
    }
    print(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
        }else{
            let i;
            let str = " ";
            for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity){
                str += this.item[i] + " ";
            }
            str += this.item[i];
            console.log(str);
        }
    }
}

const queue = new circularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(9);
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
//console.log(queue.isFull());
queue.print();
//console.log(queue.peek());
queue.dequeue();
queue.print();
console.log(queue.peek());