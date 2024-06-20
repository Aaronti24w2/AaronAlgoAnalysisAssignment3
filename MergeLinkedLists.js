class ListNode {
    constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
    }
  }

function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    let current = head;
    let values = [];
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

function removeNthFromEnd (head, n) {
    let dummy = new ListNode (0, head);
    let first = dummy;
    let second = dummy;

    for (let i = 0; i<=n; i++) {
        first = first.next;
    }

    while (first !== null ) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
}

let head = createLinkedList([1, 2, 3, 4, 5]);
let newHead = removeNthFromEnd(head, 2);

printLinkedList(newHead);
