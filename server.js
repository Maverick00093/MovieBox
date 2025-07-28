require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// MongoDB connection using dotenv
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes
app.use('/admin', adminRoutes);
app.use('/', userRoutes);

const PORT = process.env.PORT || 0241;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
