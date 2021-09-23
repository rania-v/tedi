const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const authenticate = require("./middlewares/authenticate")
const app = express();
const http = require("http");
const cors = require("cors")

require("dotenv/config");
require("./auth/auth");


app.options('*',cors());
app.use(cors());
app.use(express.json({limit: '50mb', extended: true}));

// set session
app.use(session({
    secret: 'deers',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());



// SET & USE ROUTES
const dbRoutes = require('./routes/db');
app.use('/api/db', dbRoutes);

const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes);

const jobRoutes = require('./routes/job');
app.use('/api/job', authenticate, jobRoutes);

const secureRoutes = require('./routes/secure')
app.use('/api', authenticate, secureRoutes);

const postRoutes = require('./routes/post');
app.use('/api/post', authenticate, postRoutes);




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

const options = {
    // key: fs.readFileSync("./security/localhost+1-key.pem"),
    // cert: fs.readFileSync("./security/localhost+1.pem"),
    // ca: fs.readFileSync("./security/mkcert_rootCA.crt"),
    requestCert: false,
    rejectUnauthorized: false
};

const PORT = process.env.PORT || 3001
const HOST = process.env.HOST || '127.0.0.1'

const server = http.createServer(options, app).listen(PORT, function(){
    console.log(`Server listening at http://${HOST}:${PORT}/`);
});


// app.listen(3001, ()=>{
//     console.log("Listening to 3001");
// });


module.exports = server;