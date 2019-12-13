/*globals exports, require */

const utils = require("../utils/utils.js"),
    connection = require("../utils/connection.js");



exports.addLocation = function (req, res) {

    connection.connectToDb(function (error) {
        if (error) {
            res.status(500).json({ "msg": "error connecting to db", status: "CONNECTION_ERROR" });
            return;
        }
      
        connection.createLocation(req.body, function (err, success) {
            if (err) {
                res.status(500).json({ "msg": "error updating info", status: "CONNECTION_ERROR" });
                return;
            }
            res.status(200).json({ msg: success });
        });
    });
};


exports.findMe = function (req, res) {

    connection.connectToDb(function (error) {
        if (error) {
            res.status(500).json({ "msg": "error connecting to db", status: "CONNECTION_ERROR" });
            return;
        }

        connection.findMe(req.body, function (err, success) {
            if (err) {
                res.status(500).json({ "msg": "error updating info", status: "CONNECTION_ERROR" });
                return;
            }
            res.status(200).json({ msg: success });
        });
    });
};
