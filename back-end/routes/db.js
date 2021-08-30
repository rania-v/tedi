const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require('../models/user');

mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
)
.catch( error => console.log(error.message) );


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Empty DB !!
router.post("/empty", function(req, res){
    console.log("Droping DataBase !!");
    mongoose.connection.db.dropDatabase();
    res.send('Droped DB !!');
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Empty DB && Create Admins !!
router.post("/init", function(req, res){
    //  DROP ALL && INIT ADMINS
    mongoose.connection.db.dropDatabase();

    var newUser = new User({
        isAdmin: true,
        personal:{firstName: 'admin1', lastName: 'admin1', password: 'admin1234'},
        contact:{profEmail: 'admin@admin.com'}
    });
    newUser.save();


    newUser = new User({
        isAdmin: true,
        personal:{firstName: 'admin2', lastName: 'admin2', password: 'admin2134'},
        contact:{profEmail: 'admin2@admin.com'}
    });
    newUser.save();

    newUser = new User({
        isAdmin: true,
        personal:{firstName: 'admin3', lastName: 'admin3', password: 'admin3124'},
        contact:{profEmail: 'admin3@admin.com'}
    });
    newUser.save();

    res.send('DB Initiallized !!');
    console.log('DB Initallized !!');
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Create Test Users !!
router.post("/c-test-users", function(req, res){
    
    var newUser = new User({
        isAdmin: false,
        personal:{firstName: 'mike', lastName: 'Vour', password: 'mike1234'},
        contact:{profEmail: 'mike_test@admin.com'}
    });
    newUser.save();

    newUser = new User({
        isAdmin: false,
        personal:{firstName: 'rania', lastName: 'Vour', password: 'rania1234'},
        contact:{profEmail: 'rania_test@admin.com'}
    });
    newUser.save();

    newUser = new User({
        isAdmin: false,
        personal:{firstName: 'Sailor', lastName: 'Moon', password: 'smoon1234'},
        contact:{profEmail: 'smoon_test@admin.com'}
    });
    newUser.save();

    newUser = new User({
        isAdmin: false,
        personal:{firstName: 'Random', lastName: 'Guy', password: 'rguy1234'},
        contact:{profEmail: 'rguy_test@admin.com'}
    });
    newUser.save();

    newUser = new User({
        isAdmin: false,
        personal:{firstName: 'Spider', lastName: 'Man', password: 'sman1234'},
        contact:{profEmail: 'sman_test@admin.com'}
    });
    newUser.save();


    res.send('Test Users Created !!');
    console.log('Test Users Created !!');
})


module.exports = router;
