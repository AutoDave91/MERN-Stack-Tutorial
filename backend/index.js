const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const workoutRoutes = require('./routes/workouts');

const app = express();
const { PORT, MONGO_URI } = process.env;

// database connection
mongoose.connect(MONGO_URI)
    .then(() => {
        //server startup
        app.listen(PORT, () => {
            console.log(`connected to db & listening on port ${PORT}`)
        })

    })
    .catch((error) => {
        console.log(error)
    })

// middleware
app.use(express.json())
app.use((req, res, next) => {
    next();
})

// routes
app.use('/api/workouts', workoutRoutes)
