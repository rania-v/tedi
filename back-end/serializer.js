

async function serUser(user){
    try{
        // console.log('user: ', user)
        let seruser ={
            _id: user._id,
            name:   user.personal.firstName + ' ' + user.personal.lastName,
            firstName: user.personal.firstName,
            lastname: user.personal.lastName,
            avatar: user.personal.image,
            country:    user.personal.country.value ? !user.personal.country.private ? user.personal.country.value : null : null,
            birthday:    user.personal.birthday.value ? !user.personal.birthday.private ? user.personal.birthday.value : null : null,
            myJobs: user.personal.myJobsAds.list.length > 0 ? ( !user.personal.myJobsAds.private ? user.personal.myJobsAds.list : null ): null,
            posts: user.personal.myPosts.list.length > 0 ? ( !user.personal.myPosts.private ? user.personal.myPosts.list : null ): null,
            friends: user.personal.friendsList.list ? !user.personal.friendsList.private ? user.personal.friendsList.list : null : null,
            frequests: user.personal.frequests,
            contact:{
                phoneNum: user.contact.phoneNum.value ? !user.contact.phoneNum.private ? user.contact.phoneNum.value : null : null,
                profEmail: user.contact.profEmail.value ? !user.contact.profEmail.private ? user.contact.profEmail.value : null : null,
                perEmail: user.contact.perEmail.value ? !user.contact.perEmail.private ? user.contact.perEmail.value : null : null,
            },
            attrs:{
                resume: user.attrs.resume.value ? !user.attrs.resume.private ? user.attrs.resume.value : null : null,
                profession: user.attrs.profession.value ? !user.attrs.profession.private ? user.attrs.profession.value : null : null,
                workplace: user.attrs.workplace.value ? !user.attrs.workplace.private ? user.attrs.workplace.value : null : null,
                skill_list: user.attrs.skill_list.value ? !user.attrs.skill_list.private ? user.attrs.skill_list.value :null : null,
            },
        }
        // console.log('ser: ', seruser);
        return seruser;
    }
    catch(err){
        return err
    }
}

module.exports.serUser = serUser;