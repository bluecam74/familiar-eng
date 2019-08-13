var path = require("path");

module.exports = function(app) {

    app.get("/services", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/services.html"));
    });

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/contact.html"));
    });

    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/about.html"));
    });

    app.get("/2D", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/2D.html"));
    });

    app.get("/3D", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/3D.html"));
    });

    app.get("/des-molds", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/des-molds.html"));
    });
    app.get("/mech-des", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/mech-des.html"));
    });
    app.get("/med-dev", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/med-dev.html"));
    });
    app.get("/rob-mot", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/rob-mot.html"));
    });
    app.get("/sim", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/sim.html"));
    });

    // app.get("/", function(req, res) {
    //     res.json(path.join(__dirname, "public/index.html"));
    //   });
    
  // If no matching route is found default to home
    app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });


};
