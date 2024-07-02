/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // Hash table init
    const map = new Map();
    for (let x in nums)
        // { key: number, value: index }
        map.set(nums[x].toString(), x);

    // Search
    var complement;
    for (let x in nums) {
        complement = target - nums[x];
        let y = map.get(complement.toString());
        if (y && x != y)
            return [x, y];
    }

    return null;
};

(function main() {
    const nums = [2,5,5,11],
        target = 10;

    const result = twoSum(nums, target);

    console.table(result);
})();