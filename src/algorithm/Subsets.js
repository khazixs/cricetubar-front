var subsets = function(nums) {
    let n = nums.length;
    let res = [];
    for (let mark = 0; mark < (1 << n); mark++){
        //mark表示的序列值000 001 010 011 100 101 110 111类似的
        let temp = [];
        //下面一个循环相当于扫描mark的哪一位上是1，是1就把对应位置的数字填入temp中
        for (let i = 0; i < n; i++){
            if (mark & (1 << i)) {
                temp.push(nums[i]);
            }
        }
        res.push(temp);
    }
    return res;
};

let nums1 = [5,2,9];
console.log(subsets(nums1));