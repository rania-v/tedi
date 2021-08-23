const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv/config");

app.use(express.json({limit: '50mb', extended: true}));


app.get("/",(req, res)=>{
    res.send("First request !");
});


app.get("/users",(req, res)=>{
    let users=["bob", "dilan", "mery", "rania", "mike"];
    res.send({
        users: users,
    });
});

mongoose.connect(
    process.env.DB_URL,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
)
.then( () => console.log("Server connected to MongoDB.") )
.catch( error => console.log(error.message) );


app.listen(3000, ()=>{
    console.log("Listening to 3000");
});