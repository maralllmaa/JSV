const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bp = require('body-parser');


const userRoutes = require('./routes/usersRouter');

require('dotenv').config()
app.use(cors());

app.use(bp.json());

app.use(userRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(3000, () => {
        console.log('server started on port 3000')
    })
})

// Create, Read, Update, Delete

// https://github.com/Taichir0923/JSV