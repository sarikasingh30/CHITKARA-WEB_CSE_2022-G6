// Error Handling Middleware

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route that triggers an error
app.get('/error', (req, res, next) => {
    const err = new Error('Oops, something went wrong!');
    next(err); 
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.json({ 
        error: {
            message: err.message
        }
    });
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
