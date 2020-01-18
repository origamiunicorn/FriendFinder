var friendsData = require("../data/friends");

// Routes
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        console.log(req.body.data);

        let newFriend = req.body.data.scores;
        let compatNum = 51;
        let compatIndex = [];
        let findIndex;

        compatIndex = sumCompat(newFriend, friendsData, compatNum);
        findIndex = findFriend(compatIndex);
        friendsData.push(req.body.data);

        res.json(friendsData[findIndex]);
    });

};

function compareArr(arr1, arr2) {
    // Attempting to use mapping... make new array of abs values between two arrays
    const sumDiff = arr1.map(function (num, idx) {
        return Math.abs(parseInt(num) - arr2[idx]);
    });

    // Try out them arrow functions and reduce new abs value array to integer
    const arrSum = sumDiff.reduce((a, b) => a + b, 0);
    return arrSum;
};

function sumCompat(newFrnd, allFrnd, num) {
    let arr = [];
    for (let i = 0; i < allFrnd.length; i++) {
        let arrSum = compareArr(newFrnd, allFrnd[i].scores);
        if (arrSum < num) {
            num = arrSum;
            arr = [];
            arr.push(i);
            console.log("compatNum", num, "compatIndex", arr)
        } else if (arrSum === num) {
            arr.push(i);
            console.log("compatNum", num, "compatIndex", arr)
        } else {
            console.log("the friend at this index is less compatable", i);
        }
    };
    return arr;
};

function findFriend(arr) {
    let indexF;
    if (arr.length > 1) {
        let randomFriend = Math.floor(Math.random() * arr.length);
        indexF = parseInt(arr[randomFriend]);
        console.log("The randomised greatest compatibility is with the person at index", indexF, friendsData[indexF], "on the friendsData array");
        return indexF;
    } else {
        indexF = parseInt(arr[0]);
        console.log("The singular greatest compatibility is with the person at index", indexF, friendsData[indexF], "on the friendsData array");
        return indexF;
    }
};