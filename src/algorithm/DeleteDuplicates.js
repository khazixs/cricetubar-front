/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let dummy = new ListNode();
    let tail = dummy;
    while (head !== null) {
        if (head.next === null || head.val !== head.next.val) {
            tail.next = head;
            tail = head;
        }
        while (head.next != null && head.val === head.next.val) {
            head = head.next;
        }
        head = head.next;
    }
    tail.next = null;
    return dummy.next;

}
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var head = new ListNode(1,
    new ListNode(2,
        new ListNode(2,
            new ListNode(2,
                new ListNode(3,
                    new ListNode(3,
                        new ListNode(4,
                            new ListNode(5, null))))))));
let temp = head;
while (temp !== null) {
    process.stdout.write(String(temp.val));
    temp = temp.next;
}
console.log("\n==============================");
temp = deleteDuplicates(head);
while (temp !== null) {
    process.stdout.write(String(temp.val));
    temp = temp.next;
}


  