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
        let temp = this.head;
        //If temp is not null,value of temp will print and temp will move to next pointer
        while(temp !== null){
            console.log(temp.value);
            temp = temp.next;
        }
    }

    head(){
        if(this.head === null){
            console.log("Head is null");
        }else{
            console.log("Head is " + this.head.value);
        }
    }

    tail(){
        if(this.tail === null){
            console.log("Tail is null");
        }else{
            console.log("Tail is " + this.tail.value);
        }
    }

    isEmpty(){
        return this.length === 0;
    }

    push(value) {
        //create a new node
        const newNode = new Node(value);
        //if there is no element,set head and tail as a node
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            //if there is element,set tail next pointer and tail as a new node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //as the new node is creating, incremnet the length by 1
        this.length++;
        //returning the list with this
        return this;
    }

    pop() {
        //if the list is empty
        if(!this.head){
            return undefined;
        }
        //set both variable as head
        let temp = this.head;
        let pre = this.head;
        //when temp points to next,set pre = temp and temp will move to next of pre
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }
        //set tail = pre and tail of next which is temp.next will be null
        this.tail = pre;
        this.tail.next = null;
        //as the element is removed,decrement the length
        this.length--;
        //if the length becomes 0 after pop,set head and tail as null
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        //as the temp is the pop element,return temp
        return temp;
    }
    //Big-O = O(n)

    unshift(value){
        //creating a new node
        const newNode = new Node(value);
        //if there is no element,set head and tail as a node
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            //pointer of new node will be head
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //Big - O = O(1)

    shift(){
        //if list is empty
        if(!this.head){
            return undefined;
        }
        //set temp as head
        let temp = this.head;
        this.head = this.head.next;
        //for removing the first element,set temp pointer as null
        temp.next = null;
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return temp;
    }
    //Big - O = O(1)

    get(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;
    }

    set(index, value){
        //let temp = this.get(index);
        if(index < 0 || index >= this.length){
            return undefined;
        }
        let temp = this.head;
        if(temp){
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        //when inserting into 1st index, it will be same as unshift
        if(index === 0){
            return this.unshift(value);
        }
        //when inserting into last index, it will be same as pop
        if(index === this.length){
            return this.push(value);
        }
        //when the insert position is unknown
        if(index < 0 || index > this.length){
            return false;
        }
        //creating a new node
        const newNode = new Node(value);
        //get index value ans substract 1 from the index and set it to temp
        const temp = this.get(index - 1);
        //newnode pointer will point to temp as a new node
        newNode.next = temp.newNode;
        //temp pointer will be the new node for insertion
        temp.next = newNode;
        //increment the length
        this.length++;
        //return true as previously it was set as false
        return true;
    }
    //Big-O = O(n) for inserting in the middle index
    //Big-O = O(1) for inserting at the beginning,end or out of bound

    search(value){
        if(this.isEmpty()){
            return-1;
        }
        let i = 0;
        let temp = this.head;
        //while temp is true,if value of temp match with search value, return index i
        while(temp){
            if(temp.value === value){
                return i;
            }
            //temp moves to point next pointer, with incrementing index i
            temp = temp.next;
            i++;
        }
        return -1;
    }
    //Big-O = O(n)

    remove(index){
        //if index is 0,the shift method removes node from 0
        if(index === 0){
            return this.shift()
        }
        //As index is th last position, pop() will do the same
        if(index === this.length - 1){
            return this.pop();
        }
        if(index < 0 || index >= this.length){
            return undefined;
        }
        //defining the previous index we are removing using pre variable
        const pre = this.get(index - 1);
        //temp will be after pre variable as pointer
        const temp = pre.next;
        //as pre next = temp next, it will move pre pointer to temp next node
        pre.next = temp.next;
        //it will break or remove from the list as the next value is null
        temp.next = null;
        this.length--;
        return temp;
    }
    //Big-O = O(n) for removing in the middle index
    //Big-O = O(1) for removing at the beginning,end or out of bound

    removeValue(value){
        if(this.isEmpty()){
            return undefined;
        }
        //If this.head value match with the remove value, head will move to next pointer
        if(this.head.value === value){
            this.head = this.head.next;
            this.length--;
            return value;
        }else{
            let prev = this.head;
            //while prev.next exist and prev next value is not same as remove value
            // prev will be prev.next,which will move to next pointer
            while(prev.next && prev.next.value !== value){
                prev = prev.next;
            }
            //store node in temp which will be removed,then change the pointer location to temp.next
            if(prev.next){
                const temp = prev.next;
                prev.next = temp.next;
                //for the last value,update the tail pointer
                if(temp === this.tail){
                    this.tail = prev;
                }
                this.length--;
                return value;
            }
            return null;
        }
    }
    //Big-O = O(n) in worst case when n is the number of element
    //Big-O = O(1) when removing value from the beginning

    removeDuplicate(){
        //if list is empty or only one element, it will return that element
        if(this.head === null || this.head.next === null){
            return this.head;
        }
        //set temp as the pointer of head
        let temp = this.head.next;
        //when temp is not empty, prev will set as head
        while(temp != null){
            let prev = this.head;
            //when prev is not equel to temp and both of their value is not same,set prev as pointer of next
            while(prev != temp && prev.value != temp.value){
                prev = prev.next;
            }
            //if prev is equel to temp,set temp as pointer of next
            if(prev === temp){
                temp = temp.next;
            }else {
                //when pointer of prev is not equel to temp,prev will be pointer of prev next
                while(prev.next != temp){
                    prev = prev.next;
                }
                prev.next = temp.next;
                temp = temp.next;
            }
        }
        return this.head;
    }
    //Big-O = O(n^2)

    removeSortedDuplicate(){
        //if there is no value in the list
        if(this.head == null){
            return this.head;
        }
        //if there is only one element in the list
        if(this.head.next === null){
            return this.head;
        }
        //when next element is not null ,if temp and next value match, move next pointer
        var temp = this.head;
        var next = this.head.next;
        while(next != null){
            if(temp.value === next.value){
                next = next.next;
                temp.next = next;
            }else{
                next = next.next;
                temp = temp.next;
            }
        }
        return this.head;
    }
    //Big-O = O(n)

    reverse(){
        //swap with the temp
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        //prev,temp,next are the pointer,
        let next = temp.next;
        let prev = null;
        //next will be after temp, temp.next will be prev as prev will replace temp pointer
        // temp and next will be in the same index pointer at last and loops will continue till the last
        for(let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}

let linkedList = new LinkedList(1);
linkedList.push(5);
linkedList.push(15);
linkedList.push(20);
linkedList.push(25);
linkedList.push(15);
//linkedList.set(0,12);
//linkedList.remove(0,12);
//linkedList.reverse();
//linkedList.removeValue(20);
linkedList.print();
linkedList.removeDuplicate(15);
//linkedList.removeSortedDuplicate();
linkedList.print();
//console.log(linkedList);
