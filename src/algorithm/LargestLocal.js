/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let n = grid.length;
    let res = [];
     for (let i = 1; i < n - 1; i++){
         res[i - 1] = [];
         for (let j = 1; j < n - 1; j++){
             let maxNum = 0;
             for (let k = i - 1; k <= i + 1; k++){
                 for (let m = j - 1; m <= j + 1; m++){
                     maxNum = Math.max(maxNum, grid[k][m]);
                 }
             }
             res[i - 1].push(maxNum);
         }
    }
    return res;
};

let grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]];
console.log(largestLocal(grid));
