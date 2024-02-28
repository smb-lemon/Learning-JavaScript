//Find the middle of a given linked list
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
        this.tail = this.head;
        this.length = 1;
    }

    print(){
        if(!this.head){
            console.log("List is Empty");
        }
        let temp = this.head;
        while(temp != null){
            console.log(temp.value);
            temp = temp.next;
        }
        //console.log(temp);
    }

    mid(){
        let before = this.head;
        let after = this.head;
        let temp = this.head;
        
        while(after !== null && after.next !== null){
            before = before.next;
            after = after.next.next;
        }
        console.log(this.head.value);
        this.head.next = before.next;
        //this.head.next = temp;
        console.log(this.head.next);
        return before.value;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}
const list = new LinkedList(10);
list.push(11);
list.push(12);
list.print();
console.log(list.mid());
