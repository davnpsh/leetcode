#include <stdio.h>
#include <stdlib.h>

struct ListNode {
  int val;
  struct ListNode *next;
};

void printNumber(struct ListNode *node) {
  while (node != NULL) {
    printf("%d", node->val);
    if (node->next != NULL) {
      printf(" -> ");
    }
    node = node->next;
  }
  printf("\n");
}

/*
    Creates a new node to be the next of the given one
    and make the pointer point to it
 */
void goNext(struct ListNode **node) {
  (*node)->next = (struct ListNode *)malloc(sizeof(struct ListNode));
  *node = (*node)->next;
  (*node)->next = NULL;
}

struct ListNode *addTwoNumbers(struct ListNode *l1, struct ListNode *l2) {
  // PTR
  struct ListNode *PTR = (struct ListNode *)malloc(sizeof(struct ListNode));
  struct ListNode *current = PTR;
  int sum, carry = 0;

  // Move between places in the number
  while (l1 != NULL || l2 != NULL || carry) {
    sum = carry;

    if (l1 != NULL) {
      sum += l1->val;
      l1 = l1->next;
    }

    if (l2 != NULL) {
      sum += l2->val;
      l2 = l2->next;
    }

    carry = sum > 9;
    goNext(&current);
    current->val = sum % 10;
  }

  return PTR->next;
}

int main() {

  struct ListNode *l1, *l2, *temp, *result;

  int a[] = {9, 9, 9, 9, 9, 9, 9}, /**/
      b[] = {9, 9, 9, 9};

  size_t size;

  // First number
  // [2, 4, 3]
  // PTR: 2
  l1 = (struct ListNode *)malloc(sizeof(struct ListNode));
  temp = l1;
  size = sizeof(a) / sizeof(a[0]);
  for (int i = 0; i < size; i++) {
    temp->val = a[i];
    if (i != size - 1)
      goNext(&temp);
  }

  // Second number
  // [5, 6, 4]
  // PTR: 5
  l2 = (struct ListNode *)malloc(sizeof(struct ListNode));
  temp = l2;
  size = sizeof(b) / sizeof(b[0]);
  for (int i = 0; i < size; i++) {
    temp->val = b[i];
    if (i != size - 1)
      goNext(&temp);
  }

  result = addTwoNumbers(l1, l2);
  printNumber(l1);
  printNumber(l2);
  printf("--------------------------\n");
  printNumber(result);

  return 0;
}