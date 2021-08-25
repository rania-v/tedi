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
    // process.env.DB_URL,
    process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
)
.then( () => console.log("Server connected to MongoDB.") )
.catch( error => console.log(error.message) );


const { User } = require('./models/User/user');

app.get("/c-user", async(req, res)=>{
    console.log(req.query);
    console.log('Creating User ..')
    try {
        console.log('BBBBBBBB   ')
        const myuser = new User(req.query);
        console.log('AAAAAAAAAAA')
        myuser.name = req.query.name;
        myuser.email = req.query.email;

        console.log('myuser');
        await myuser.save();
        console.log(myuser);
        res.send(myuser);
    }catch (err) {
        res.send({message: err});
        console.log('\t.. FAILED !!');
    }
});

app.listen(3000, ()=>{
    console.log("Listening to 3000");
});