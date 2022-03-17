class Node {
  // Your code here!
  constructor (value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class LinkedList {
  // Your code here!
  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToTail(newNode){
    if (!this.tail){ // Edge Case no nodes
      this.head = newNode;
      this.tail = newNode;
    } else { // General Case has nodes
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      /* // Alternative solution
      let oldTail = this.tail;
      oldTail.next = newNode;
      newNode.previous = oldTail;
      this.tail = newNode;
      */
    }

    this.size++
  }

  addToHead(newNode){
    if (!this.head){ // Edge Case no nodes
      this.head = newNode;
      this.tail = newNode;
    } else { // General Case has nodes
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      /* //Alternative solution
      let oldHead = this.head;
      oldHead.previous = newNode;
      newNode.next = oldHead;
      this.head = newNode;
      */
    }

    this.size++;
  }

  removeTail(){
    if (!this.tail) return null; // Edge Case no nodes
    let oldTail = this.tail;
    if (this.head === this.tail){ // Edge Case 1 node
    /*  // Alternative check
    if(!oldTail.previous){
    */
      this.head = null;
      this.tail = null;
    } else { // General Case has nodes
      this.tail = oldTail.previous;
      this.tail.next = null;
    }
    return oldTail;
  }

}

module.exports = {
  Node,
  LinkedList
}