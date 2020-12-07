const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
            },
            name: {
                type: String,
                trim: true,
            },
            duration: {
                type: Number,
                default: 0,
            },
            weight: {
                type: Number,
                default: 0,
            },
            reps: {
                type: Number,
                default: 0,
            },
            sets: {
                type: Number,
                default: 0,
            },
        },
    ],
});

module.exports = mongoose.model("workout", workoutSchema);
