const before = Date.now()

// Doubly Linked List way:
class DoublyLinkedListNode {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(val) {
        let newNode = new DoublyLinkedListNode(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
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

const printReverse = (min, max) => {
    const list = new DoublyLinkedList()
    for (let i = max - 1; i > min; i--) {
        list.append(i)
    }

    return list.toArray()
}

console.log(printReverse(1, 10000000))

const after = Date.now()

console.log(after - before + ' ms')

// As expected it is much slower, because it uses a for loop and a while loop.