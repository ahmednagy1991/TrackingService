const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

// create a schema for Dish
let livelocationSchema = new Schema({
    IMEI: String,
    Latitude: String,
    Longitude: String,
    creationDate: Date
});

// Create a model using schema
let LiveLocation = mongoose.model("LiveLocations ", livelocationSchema);

// make this model available
module.exports = LiveLocation;