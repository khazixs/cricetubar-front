var alertNames = function (keyName, keyTime) {
    let namesMap = new Map();
    for (let i = 0; i < keyName.length; i++) {
        let tempName = keyName[i];
        let timeSlots;
        if (!namesMap.has(tempName)) {
            timeSlots = [];
        } else {
            timeSlots = namesMap.get(tempName);
        }
        timeSlots.push(keyTime[i]);
        namesMap.set(tempName, timeSlots);
    }
    let res = [];
    for (let item of namesMap.keys()) {
        let timeSlots = [];
        timeSlots = namesMap.get(item);
        timeSlots.sort();
        //todo暂时先不考虑排序的问题
        let count = 0;
        let startTime = "";
        let startIndex = -1;
        for (let i = 0; i < timeSlots.length; i++) {
            let nowTime = timeSlots[i];
            if (startTime !== "") {
                let startTimeFirst = Number(startTime.split(":")[0]);
                let startTimeLast = Number(startTime.split(":")[1]);
                let nowTimeFirst = Number(nowTime.split(":")[0]);
                let nowTimeLast = Number(nowTime.split(":")[1]);
                if (Math.abs(nowTimeFirst - startTimeFirst) >= 2) {
                    startIndex += 1;
                    count = 1;
                    i = startIndex;
                    startTime = timeSlots[i];
                    continue;
                } else if (Math.abs(nowTimeFirst - startTimeFirst) === 1) {
                    if (startTimeLast >= nowTimeLast) {
                        count++;
                        if (count === 3) {
                            res.push(item);
                            break;
                        }
                    } else {
                        startIndex += 1;
                        count = 1;
                        i = startIndex;
                        startTime = timeSlots[i];
                        continue;
                    }
                } else {
                    count++;
                    if (count === 3) {
                        res.push(item);
                        break;
                    }
                }
            } else {
                startTime = timeSlots[i];
                count = 1;
            }
        }
    }
    res.sort();
    return res;
};

let keyName = ["leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"],
    keyTime = ["13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"];
console.log(alertNames(keyName, keyTime));