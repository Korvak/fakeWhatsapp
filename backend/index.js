const express = require('express');

const app = express();
const PORT = 3000;

//simple api methods without routing or other stuff
app.get("/", function (req,res) {
    res.send("hello");
});



app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running. App is listening on port " + PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);