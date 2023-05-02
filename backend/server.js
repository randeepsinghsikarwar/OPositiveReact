const express = require('express');
require('dotenv').config()

// express app
const app = express()

app.get('/' , (req, res) => {
    res.json({message: 'welcome'})
})

app.listen(process.env.PORT, () => {
    console.log("working on port 4000")
})

