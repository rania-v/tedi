const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

require("dotenv/config");

app.use(express.json({limit: '50mb', extended: true}));

// SET & USE ROUTES
const dbRoutes = require('./routes/db');
app.use('/api/db', dbRoutes);

// connect db
mongoose.connect(
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

// set session
app.use(session({
    secret: 'deers',
    resave: false,
    saveUninitialized: true
}));

app.listen(3000, ()=>{
    console.log("Listening to 3000");
});