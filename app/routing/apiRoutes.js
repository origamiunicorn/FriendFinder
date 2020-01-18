var friendsData = require("../data/friends");

// Routes
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        let newFriend = req.body.data.scores;
        let compatNum = 51;
        let compatIndex = [];
        let findIndex;

        for (let i = 0; i < friendsData.length; i++) {
            let arrSum = compareArr(newFriend, friendsData[i].scores);
            if (arrSum < compatNum) {
                compatNum = arrSum;
                compatIndex = [];
                compatIndex.push(i);
                console.log("compatNum", compatNum, "compatIndex", compatIndex)
            } else if (arrSum === compatNum) {
                compatIndex.push(i);
                console.log("compatNum", compatNum, "compatIndex", compatIndex)
            } else {
                console.log("this index is less compatable", i);
            }
        };
        console.log(compatNum);
        console.log(compatIndex);

        if (compatIndex.length > 1) {
            let randomFriend = Math.floor(Math.random() * compatIndex.length);
            findIndex = parseInt(compatIndex[randomFriend]);
            console.log("The randomised greatest compatibility is with the person at index", findIndex, friendsData[findIndex], "on the friendsData array");
        } else {
            findIndex = parseInt(compatIndex[0]);
            console.log("The singular greatest compatibility is with the person at index", friendsData[findIndex], "on the friendsData array");
        }
    });

};

function compareArr(arr1, arr2) {
    const sumDiff = arr1.map(function (num, idx) {
        return Math.abs(parseInt(num) - arr2[idx]);
    });

    const arrSum = sumDiff.reduce((a, b) => a + b, 0);

    console.log("Absolute Values between two arrays", sumDiff);
    console.log("Sum of differences in array", arrSum);

    return arrSum;
}


