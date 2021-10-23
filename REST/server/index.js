const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bp = require('body-parser')

const userRoutes = require('./routes/usersRouter');

app.use(cors());

app.use(bp.json());

app.use(userRoutes);

mongoose.connect('mongodb+srv://narada:admin1@cluster0.wtu5m.mongodb.net/rest')
app.listen(3000, () => {
    console.log('server started on port 3000')
})

// Create, Read, Update, Delete