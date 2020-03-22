const express = require('express');
const app = express();
const port = process.env.API_PORT || 3000;

app.listen(port, () => {  
    console.log(`App was loaded on port: ${port}`);
})