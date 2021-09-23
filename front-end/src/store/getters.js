var testUserm = [
    {_id: 1, isAdmin: false, firstName: 'mike', lastName: 'vour', profEmail: 'mvour@test.com'},
];

var testing = true;

console.log(testUserm)
export default{
    isLoading: state => state.isLoading,
    isLogedIn: state => state.isLogedIn,

    firstName: state => testing ? testUserm.firstName : state.firstName,
    lastName: state => testing ? testUserm.lastName : state.lastName,
    profEmail: state => testing ? testUserm.proEmail : state.profEmail,
}