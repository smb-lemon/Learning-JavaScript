//Write a function that counts the number of times a given int occurs in a Linked List

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.head = this.tail;
        this.length = 1;
    }

    print(){
        // if(!this.head){
        //     return null;
        // }
        let temp = this.head;
        while(temp !== null){
            console.log(temp.value);
            temp = temp.next;
        }
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    count(value){
        if(!this.head){
            return null;
        }
        let count = 0;
        let temp = this.head;
        while(temp !== null){
            if(temp.value === value){
                count++;
               // console.log(temp.value);
               // console.log(count);
                //temp = temp.next;
                //count++;
            }
            temp = temp.next;
            //console.log(count);
            
        }
        return count;
    }
}

const list = new LinkedList(10);
list.push(3);
list.push(2);
list.push(1);
list.push(3);
list.print();
console.log(list.count(3));
