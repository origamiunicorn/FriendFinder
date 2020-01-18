var friendsData = require("../data/friends");

// Routes
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        // console.log(req.body);
        // console.log(req.body.data.scores);

        let newFriend = req.body.data.scores;
        console.log(newFriend);
        console.log(friendsData[0].scores);

        compareArr(newFriend, friendsData[0].scores);

        // for (let i = 0; i < friendsData.length; i++) {

        // }

        // want to push to array but before/after checking all values?
    });

};

function compareArr(arr1, arr2) {
    const sumDiff = arr1.map(function (num, idx) {
        return Math.abs(parseInt(num) - arr2[idx]);
    });

    console.log("Absolute Values between two arrays", sumDiff);
}


