// var testUserm = [
//     {_id: 1, isAdmin: false, firstName: 'mike', lastName: 'vour', profEmail: 'mvour@test.com'},
// ];


// {
    //                         user: 'Mizuno Ami',
    //                         avatar: require('../icons/avatars/ami.jpg'),
    //                         profession: 'Sports car racing',
    //                         workplace: 'F1',
    //                         status: 'close_friend'
    //                     },
    //                     {
    //                         user: 'Hino Rei',
    //                         avatar: require('../icons/avatars/rei.png'),
    //                         profession: 'Sports car racing',
    //                         workplace: 'F1',
    //                         status: 'close_friend'
    //                     },
    //                     {
    //                         user: 'Minako Aino',
    //                         avatar: require('../icons/avatars/aino.jpg'),
    //                         profession: 'Sports car racing',
    //                         workplace: 'F1',
    //                         status: 'friend'
    //                     },

var countrie_list = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla",
    "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
    "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam",
    "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands",
    "Central African Republic", "Chad", "Chile", "China, People's republic of", "Christmas Island", "Cocos (Keeling) Islands", "Colombia",
    "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire",
    "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia",
    "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana",
    "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar",
    "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
    "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait",
    "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius",
    "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat",
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles",
    "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands",
    "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Palestine", "Peru", "Philippines", "Pitcairn",
    "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon",
    "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic",
    "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Tibet", "Togo", "Tokelau", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay",
    "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)",
    "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
]

var testSkills = [
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
]
var testing = true;

export default{
    isLoading: state => state.isLoading,
    isLogedIn: state => state.isLogedIn,
    isAdmin: state => state.isAdmin ? state.isAdmin : testing ? false : false ,

    _id: state => state._id ? state._id : state._id,
    
    allSkills: state => state.allSkills ? testSkills : testSkills,
    countrie_list: state => state.countrie_list ? countrie_list : countrie_list,

    firstName: state => state.firstName ? state.firstName : null,
    lastName: state => state.lastName ? state.lastName : null,
    image: state => state.image ? state.image : null,
    birthday: state => state.birthday ? state.birthday : null,
    country: state => state.country ? state.country : state.country,
    friends: state => state.friends,
    frequests: state => state.frequests ? state.frequests : null,
    myJobs: state => state.myJobs,
    myChats: state => state.myChats ? state.myChats : [],
    posts: state => state.posts ? state.posts : null,
    notifications: state => state.notifications ? state.notifications : state.notifications,

    phoneNum: state => state.phoneNum ? state.phoneNum : null,
    profEmail: state => state.profEmail ? state.profEmail : null,
    perEmail: state => state.perEmail ? state.perEmail : null,

    resume: state => state.resume ? state.resume : null,
    profession: state => state.profession ? state.profession : null,
    workplace: state => state.workplace ? state.workplace : null,
    skills: state => state.skills,

    postsToSee: state => state.postsToSee ? state.postsToSee : [],
    jobsToSee: state => state.jobsToSee ? state.jobsToSee : [],

}