const express = require('express');
const { registrationController } = require('./controllers/authController');
const app = express();
const port = 8000

app.use(express.json())

app.post("/registration", registrationController)

app.listen(port, () => {
    console.log("server running");
    
})