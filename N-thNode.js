class ListNode {
    constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;


    while (l1 !== null && l2 !== null) {
        if (l1.value <= l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
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

let l1 = createLinkedList([1, 3, 5]);
let l2 = createLinkedList([2, 4, 6]);

let mergedList = mergeTwoLists(l1, l2);

printLinkedList (mergedList);



