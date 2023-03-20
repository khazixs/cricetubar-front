/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let result = nums.length;
    let supplementLocation = [];
    let temp = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (temp === nums[i]) {
            if (count < 2) {
                count++;
            } else {
                //count of the same number is more than 2
                result--;
                nums[i] = Number.MAX_SAFE_INTEGER;
            }
        } else {
            count = 1;
            temp = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === Number.MAX_SAFE_INTEGER) {
            supplementLocation.push(i);
        } else {
            if (supplementLocation.length !== 0) {
                if (i + 1 < nums.length && nums[i + 1] === nums[i] && supplementLocation.length < 2) {
                    i++;
                }
                nums[supplementLocation.shift()] = nums[i];
                supplementLocation.push(i);
            }
        }
    }
    nums.length = result;
    return result;
};
let nums = [0,0,0,0];
console.log(removeDuplicates(nums));
console.log(nums);