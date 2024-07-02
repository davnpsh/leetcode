/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    
    const map = new Map();

    for (let x in nums) {
        const complement = target - nums[x];

        if (complement in map) return [map[complement], x];

        // { key: number, value: index }
        map[nums[x]] = x;
    }
};

(function main() {
    const nums = [2,5,5,11],
        target = 10;

    const result = twoSum(nums, target);

    console.table(result);
})();