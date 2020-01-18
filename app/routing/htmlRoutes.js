const path = require("path");

// Routes to our two pages, with a catchall leading to home
module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/images/:name", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/images/" + req.params.name))
    })

    // For all other routes, default to home
    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
