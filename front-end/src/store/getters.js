var testUserm = [
    {_id: 1, isAdmin: false, firstName: 'mike', lastName: 'vour', profEmail: 'mvour@test.com'},
];

var testing = true;

console.log(testUserm)
export default{
    isLoading: state => state.isLoading,
    isLogedIn: state => state.isLogedIn,
    isAdmin: state => state.isAdmin ? state.isAdmin : testing ? false : false ,

    allSkills: state => state.allSkills ? state.allSkills : [],

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