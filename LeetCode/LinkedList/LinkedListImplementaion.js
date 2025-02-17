class Node {
  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(ele) {
    let node = new Node(ele);

    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insertAt(ele, idx) {
    if (idx < 0 || idx > this.size) {
      return "Please Enter Valid index";
    } else {
      let node = new Node();
      let prev, curr;
      curr = this.head;

      if (idx == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;

        let it = 0;

        while (it < idx) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }

      this.size++;
    }
  }
}
