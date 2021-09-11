var testUser = [
    {_id = 1, isAdmin = false, firstName: 'mike', lastName: 'vour', profEmail: 'mvour@test.com'},
];

var testing = true;

export default{
    isLoading: state => state.isLoading,
    isLogedIn: state => state.isLogedIn,

    firstName: state => testing ? testUser.firstName : state.firstName,
    lastName: state => testing ? testUser.lastName : state.lastName,
    profEmail: state => testing ? testUser.proEmail : state.profEmail,
}