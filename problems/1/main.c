/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

#include <stdio.h>
#include <stdlib.h>

int *twoSum(int *nums, int numsSize, int target, int *returnSize) {
  // Memory allocation
  *returnSize = 2;
  int *indices = malloc(*returnSize * sizeof(int));
  int sum, done = 0;

  for (int i = 0; i < numsSize; i++) {
    if (done) {
      break;
    }
    sum = nums[i];
    indices[0] = i;
    for (int j = i + 1; j < numsSize; j++) {
      // Found second index
      if (sum + nums[j] == target) {
        done = 1; // <-- Break main loop
        indices[1] = j;
        break;
      }
    }
  }

  return indices;
}

int main() {
  int nums[] = {2, 7, 11, 15};
  int target = 9;
  int returnSize;

  int* indices = twoSum(nums, 4, target, &returnSize);

  printf("[");
  for (int i = 0; i < returnSize; i++) {
    printf("%d", indices[i]);
    if (i != returnSize - 1) {
      printf(",");
    }
  }
  printf("]\n");

  return 0;
}