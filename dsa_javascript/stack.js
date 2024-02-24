class Stack{
    constructor(){
        this.item = {};
        this.head = 0;
    }
    push(element){
        this.item[this.head] = element;
        this.head++;
    }
    pop(){
        const item = this.item[this.head - 1];
        delete this.item[this.head - 1];
        this.head--;
        return item;
    }
    peek(){
        return this.item[this.head - 1];
    }
    isEmpty(){
        return this.head === 0;
    }
    size(){
        return this.head;
    }
    print(){
        console.log(Object.values(this.item));
    }
}

//Big-O = O(1)

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
console.log(stack.size());
stack.print();
stack.pop();
console.log(stack.peek());


// class Stack{
//     constructor(){
//         this.item = [];
//     }
//     push(element){
//         return this.item.push(element);
//     }
//     pop(){
//         return this.item.pop();
//     }
//     peek(){
//         return this.item[this.item.length - 1];
//     }
//     isEmpty(){
//         return this.item === 0;
//     }
//     size(){
//         return this.item.length;
//     }
//     print(){
//         console.log(this.item.toString());
//     }
// }

//Big-O = O(n)