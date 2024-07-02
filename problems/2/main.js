function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} node
 */
var printNumber = function (node) {
    while (node != null) {
        process.stdout.write(node.val.toString());
        if (node.next != null) {
            process.stdout.write(" -> \0");
        }
        node = node.next;
    }
    console.log();
}

/**
 * @param {ListNode} node
 * @return {ListNode}
 */
var goNext = function (node) {
    node.next = new ListNode();
    return node.next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const PTR = new ListNode();
    var current = PTR,
        sum, carry = 0;

    while (l1 != null || l2 != null || carry) {
        // Total sum
        sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);

        carry = (sum > 9) ? 1 : 0;
        current = goNext(current);
        current.val = sum % 10;

        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }

    return PTR.next;
};

(function main() {
    const a = [9, 9, 9, 9, 9, 9, 9],
        b = [9, 9, 9, 9];

    l1 = new ListNode();
    temp = l1;
    for (let x in a) {
        temp.val = a[x];
        if (x != a.length - 1)
            temp = goNext(temp);
    }

    l2 = new ListNode();
    temp = l2;
    for (let x in b) {
        temp.val = b[x];
        if (x != b.length - 1)
            temp = goNext(temp);
    }

    result = addTwoNumbers(l1, l2);
    printNumber(l1);
    printNumber(l2);
    console.log("--------------------------");
    printNumber(result);
})();