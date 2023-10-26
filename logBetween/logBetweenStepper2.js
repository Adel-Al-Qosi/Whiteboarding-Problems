const before = Date.now()

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  
    toArray() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      return result;
    }
  }
  
  function logBetweenDoublyLinkedList(lowNum, highNum, step) {
    const list = new DoublyLinkedList();
    if (lowNum > highNum) return [];
  
    for (let i = lowNum; i <= highNum; i += step) {
      list.append(i);
    }
  
    return list.toArray();
  }
  
  console.log(logBetweenDoublyLinkedList(0, 10000, 1));
  console.log(logBetweenDoublyLinkedList(0, 100000, 5));

const after = Date.now()

const time = after - before

console.log(time + 'ms')