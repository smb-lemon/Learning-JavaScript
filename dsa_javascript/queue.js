class Queue{
    constructor(){
        this.item = {};
        this.rear = 0;
        this.front = 0;
    }
    enqueue(element){
        this.item[this.rear] = element;
        this.rear++;
    }
    dequeue(){
        const item = this.item[this.front];
        delete this.item[this.front];
        this.front++;
        return item;
    }
    isEmpty(){
        return this.rear - this.front === 0;
    }
    peek(){
        return this.item[this.front];
    }
    size(){
        return this.rear - this.front;
    }
    print(){
        console.log(Object.values(this.item));
    }
}

//Big-O = O(1)

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(9);
queue.enqueue(10);
queue.enqueue(11);
queue.print();
console.log(queue.peek());
queue.dequeue();
queue.print();
console.log(queue.size());


// class Queue{
//     constructor(){
//         this.item = [];
//     }
//     enqueue(element){
//         this.item.push(element);
//     }
//     dequeue(){
//         this.item.shift();
//     }
//     isEmpty(){
//         return this.item.length === 0;
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.item[0];
//         }
//         return null;
//     }
//     size(){
//        return this.item.length;
//     }
//     print(){
//         console.log(this.item.toString());
//     }
// }

//Big - O = O(n)