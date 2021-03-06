const db = require("../models");

module.exports = function (app) {
    //get workout
    app.get("/api/workout", (req, res) => {
        db.workout
            .find({})
            .then((workout) => {
                workout.forEach((w) => {
                    let total = 0;
                    w.exercises.forEach((e) => {
                        total += e.duration;
                    });
                    workout.totalDuration = total;
                });
                res.json(workout);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    // add exercise
    app.put("/api/workouts/:id", (req, res) => {
        db.workout
            .findOneAndUpdate(
                { _id: req.params.id },
                {
                    $inc: { totalDuration: req.body.duration },
                    $push: { exercises: req.body },
                },
                { new: true }
            )
            .then((w) => {
                res.json(w);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    //create workout
    app.post("/api/workouts", ({ body }, res) => {
        db.workout
            .create(body)
            .then((w) => {
                res.json(w);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    // get workouts in range
    app.get("/api/workouts/range", (req, res) => {
        db.workout
            .find({})
            .then((w) => {
                res.json(w);
            })
            .catch((err) => {
                res.json(err);
            });
    });
};
