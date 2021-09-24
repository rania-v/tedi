var testUserm = [
    {_id: 1, isAdmin: false, firstName: 'mike', lastName: 'vour', profEmail: 'mvour@test.com'},
];


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

console.log(testUserm)
export default{
    isLoading: state => state.isLoading,
    isLogedIn: state => state.isLogedIn,
    isAdmin: state => state.isAdmin ? state.isAdmin : testing ? false : false ,

    allSkills: state => state.allSkills ? testSkills : testSkills,

    firstName: state => state.firstName ? state.firstName : null,
    lastName: state => state.lastName ? state.lastName : null,
    image: state => state.image ? state.image : null,
    birthday: state => state.birthday ? state.birthday : null,
    country: state => state.country ? state.country : null,
    friendsList: state => state.friends ? state.friends : null,
    frequests: state => state.frequests ? state.frequests : null,
    myJobs: state => state.myJobs ? state.myJobs : null,
    myChats: state => state.myChats ? state.myChats : null,
    posts: state => state.posts ? state.posts : null,
    notifications: state => state.notifications ? state.notifications : null,

    phoneNum: state => state.phoneNum ? state.phoneNum : null,
    profEmail: state => state.profEmail ? state.profEmail : null,
    perEmail: state => state.perEmail ? state.perEmail : null,

    resume: state => state.resume ? state.resume : null,
    profession: state => state.profession ? state.profession : null,
    workplace: state => state.workplace ? state.workplace : null,
    skills: state => state.skills ? state.skills : [],

    postsToSee: state => state.postsToSee ? state.postsToSee : [],

}