const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User_module = require('../models/user');
const User = User_module.user

const {skillSet} = require('../models/hard_skills');

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
.catch( error => console.log(error.message) );


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Empty DB !!
router.post("/empty", function(req, res){
    console.log("Droping DataBase !!");
    mongoose.connection.db.dropDatabase();
    res.send('Droped DB !!');
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Empty DB && Create Admins !!
router.post("/init", async function(req, res){
    //  DROP ALL && INIT ADMINS
    mongoose.connection.db.dropDatabase();

    var newUser = new User({
        isAdmin: true,
        personal:{firstName: 'admin1', lastName: 'admin1', password: 'admin1234'},
        contact:{profEmail: {value: 'admin@admin.com'}}
    });
    newUser.save();


    newUser = new User({
        isAdmin: true,
        personal:{firstName: 'admin2', lastName: 'admin2', password: 'admin2134'},
        contact:{profEmail: {value:'admin2@admin.com'}}
    });
    newUser.save();

    newUser = new User({
        isAdmin: true,
        personal:{firstName: 'admin3', lastName: 'admin3', password: 'admin3124'},
        contact:{profEmail: {value: 'admin3@admin.com'}}
    });
    newUser.save();

    var newSkillSet = new skillSet(
        all_skills = [
        {
            category: 'Technical skills',
            skill_list: [
                'CAD','Lean manufacturing',' Multivariate analysis', 'Linear regression', 'Prototyping',
                'Workflow development', 'STEM skills', 'Web: HTML, CSS, Javascript', 'Payment processing',
                'Automated Billing Systems', 'CRM Platforms', 'Research', 'Troubleshooting'
            ]
        },
        {
            category: 'Computer skills',
            skill_list: [
                'Google Drive', 'Spreadsheets', 'Email', 'Presentations/Slideshows', 'Database Management', 'Quickbooks', 'Social media', 'Web', 'Typing',
                'Graphics', 'Enterprise systems', 'WPM', 'Java', 'PHP', 'MySQL', 'SQL', 'C#', 'JavaScript', 'C++', 'Python', 'iOS/Swift', 'Ruby on Rails'
            ]
        },
        {
            category: 'Analytical skills',
            skill_list: [
                'Research', 'Forecasting', 'Data mining', 'Data presentation', 'Resource management', 'Data engineering', 'Database management',
                'Data and metrics interpreting', 'Reporting', 'Diagnostics', 'Creativity', 'Theorizing'
            ]
        },
        {
            category: 'Marketing skills',
            skill_list: [
                'SEO/SEM: Ahrefs, SEMRush', 'SEO Power Suite', 'Majestic',
                'PPC', 'Social media marketing and paid social media advertising', 'Writing', 'CRO and A/B testing', 'Email marketing and automation',
                'HubSpot', 'Aritic PinPoint', 'ONTRAPORT', 'Infusionsoft',
                'Funnel management', 'UX Design', 'Data visualization', 'Google Analytics and Google Search Console', 'AdWords, Facebook Paid Ads'
            ]
        },
        {
            category: 'Presentation skills',
            skill_list: [
                'Visual communication', 'Slideshows', 'Research', 'Data analysis', 'Reporting', 'Persuasion', 'Graphic design'
            ]
        },
        {
            category: 'Management Skills',
            skill_list: [
                'Business knowledge', 'Budgeting', 'Project management', 'Hiring', 'Finance', 'Office management skills', 'Logistics',
                'New business development', 'Negotiating', 'Planning'
            ]
        },
        {
            category: "Project management skills",
            skill_list: [
                    'Project scheduling', 'Strategic planning', 'Project lifecycle management', 'Agile software', 'Scrum management',
                    'Financial modeling', 'Kanban', 'Forecasting', 'Performance tracking', 'Budgeting'
            ]
        },
        {
            category: 'Writing skills',
            skill_list: [
                'Note-taking', 'Letter writing', 'Email writing', 'Business writing reports, press releases, content management',
                'Data visualization', 'Creative writing: plotting, worldbuilding, dialogue', 'Academic writing', 'Storytelling',
                'Copywriting', 'SEO', 'Editing', 'Journalism', 'Proposal writing', 'Social media', 'Presentation writing'
            ]
        },
        {
            category: 'Design SKills',
            skill_list: [
                'Photoshop', 'Illustrator', 'InDesign', 'UX/UI design', 'UX research', 'Data visualization', 'Color theory', 'Acrobat',
                'HTML/CSS', 'Free Hand', 'Corel Draw', 'Sketching', 'Typography', 'Print design', 'Layout'
            ]
        }
    ])
    newSkillSet.save();


    res.send('DB Initiallized !!');
    console.log('DB Initallized !!');
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Create Test Users !!
router.post("/c-test-users", function(req, res){

    var newUser = new User({
        isAdmin: false,
        personal:{firstName: 'mike', lastName: 'Vour', password: 'mike1234'},
        contact:{profEmail: {value:'mike_test@admin.com'}}
    });
    newUser.save();

    newUser = new User({
        isAdmin: false,
        personal:{firstName: 'rania', lastName: 'Vour', password: 'rania1234'},
        contact:{profEmail: {value:'rania_test@admin.com'}}
    });
    newUser.save();

    newUser = new User({
        isAdmin: false,
        personal:{firstName: 'Sailor', lastName: 'Moon', password: 'smoon1234'},
        contact:{profEmail: {value:'smoon_test@admin.com'}}
    });
    newUser.save();

    newUser = new User({
        isAdmin: false,
        personal:{firstName: 'Random', lastName: 'Guy', password: 'rguy1234'},
        contact:{profEmail: {value:'rguy_test@admin.com'}}
    });
    newUser.save();

    newUser = new User({
        isAdmin: false,
        personal:{firstName: 'Spider', lastName: 'Man', password: 'sman1234'},
        contact:{profEmail: {value:'sman_test@admin.com'}}
    });
    newUser.save();


    res.send('Test Users Created !!');
    console.log('Test Users Created !!');
})


module.exports = router;
