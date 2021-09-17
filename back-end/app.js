const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const authenticate = require("./middlewares/authenticate")
const app = express();

require("dotenv/config");
require("./auth/auth");

app.use(express.json({limit: '50mb', extended: true}));

// SET & USE ROUTES
const dbRoutes = require('./routes/db');
app.use('/api/db', dbRoutes);

const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes);

const jobRoutes = require('./routes/job');
app.use('/api/job', authenticate, jobRoutes);

const secureRoutes = require('./routes/secure')
app.use('/api/', authenticate, secureRoutes);

const postRoutes = require('./routes/post');
app.use('/api/post', authenticate, postRoutes);


// set session
app.use(session({
    secret: 'deers',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// connect db
mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        // autoIndex: true
    }
)
.then( () => console.log("Server connected to MongoDB.") )
.catch( error => console.log(error.message) );




app.listen(3000, ()=>{
    console.log("Listening to 3000");
});
