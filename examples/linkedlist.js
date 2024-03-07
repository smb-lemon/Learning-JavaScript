class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
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

    print(){
        if(!this.head){
            return null;
        }
        let temp = this.head;
        while(temp !== null){
            console.log(temp.value);
            temp = temp.next;
        }
    }
}
const l = new List();
l.push(2);
//console.log(List.value);
l.print();