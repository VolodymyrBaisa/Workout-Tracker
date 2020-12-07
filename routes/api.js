const workout = require("../models");
const { db } = require("../models/workout");

module.exports = function (app) {
    //get workout
    app.get("/api/workout", (req, res) => {
        db.workout.find({}).then((workout) => {});
    });

    // add exercise
    app.put("/api/workouts/:id", (req, res) => {});

    //create workout
    app.post("/api/workouts", ({ body }, res) => {});

    // get workouts in range
    app.get("/api/workouts/range", (req, res) => {});
};
