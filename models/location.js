const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

// create a schema for Dish
let locationSchema = new Schema({
    IMEI: String,
    Latitude: String,
    Longitude: String,
    creationDate: Date
});

// Create a model using schema
let Location = mongoose.model("Locations ", locationSchema);

// make this model available
module.exports = Location;