function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr: number[] = [];

  // Sort new array
  while (nums1 || nums2) {
    if (nums1.length > 0 && nums2.length > 0) {
      // If both arrays still have elements, shift them
      if (nums1[0] <= nums2[0]) arr.push(nums1.shift() as number);
      if (nums1[0] >= nums2[0]) arr.push(nums2.shift() as number);

      // If only one of them
    } else if (nums1.length > 0) {
      arr.push(nums1.shift() as number);
    } else if (nums2.length > 0) {
      arr.push(nums2.shift() as number);

      // When done, break
    } else break;
  }

  const median =
    arr.length % 2 !== 0
      ? // On odd sized array
        arr[Math.floor(arr.length / 2)]
      : // On even size
        (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;

  return median;
}

(function main() {
  const nums1 = [1, 2],
    nums2 = [3, 4];

  const result = findMedianSortedArrays(nums1, nums2);

  console.log(result);
})();
