const express = require('express');
const app = express();
const { NotFound , globalError } = require('./config/init')

// Middleware
app.use(express.json());





// Routes










// Handle 404 Not Found
app.use(NotFound);

// Global Error Handling Middleware
app.use(globalError);





module.exports = app;


