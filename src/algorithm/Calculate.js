let calc = function (str) {
    let regSign = /([+*/-])/g;
    let arr = str.split(regSign);
    let res = 0;
    let regNum = /[0-9999]/g;
    let sign = "+";
    for (let n of arr) {
        if (n.match(regNum)) {
            if (sign === "+") {
                res += Number.parseInt(n);
            } else if (sign === "-") {
                res -= Number.parseInt(n);
            } else {
                continue;
            }
        } else {
            sign = n;
        }
    }
    return res;
}

console.log(calc("1+23+4-1"));