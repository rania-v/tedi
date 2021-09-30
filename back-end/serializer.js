// const { user } = require("./models/user");
const { post, comment} = require("./models/post")
const { job } = require("./models/job")

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
                skill_list: user.attrs.skill_list.list ? !user.attrs.skill_list.private ? user.attrs.skill_list.list :null : null,
            },
        }
        // console.log('ser: ', seruser);
        return seruser;
    }
    catch(err){
        return err
    }
}

async function selector(user, data){
    console.log('data: ', data)
    let select={name:user.personal.firstName + ' ' + user.personal.lastName};
    if(data.data=='bio' && data.status){
        
    }

    for(let d of data){
        if(d.data=='posts' && d.status){
            select.posts = []
            
            for(let p of user.personal.myPosts.list){
                console.log('p: ', p)
                let targetPost = await post.findById(p)
                console.log('post: ', targetPost)
                select.posts.push({Post: targetPost.content})
            }
        }
        if(d.data=='ads' && d.status){
            select.JobAds = []
            for(let j of user.personal.myJobsAds.list){
                let targetJob = await job.findById(j)
                select.JobAds.push({
                    title: targetJob.title,
                    company: targetJob.basic_info.company_name,
                    location: targetJob.basic_info.location
                })
            }
        }
        if(d.data=='qualifications' && d.status){
            select.skills = user.attrs.skill_list.list;
        }
        if(d.data=='intrests in ads' && d.status){
            select.applied_to = []
            
            for(let appl of user.personal.myJobsAds.list){
                let targetJob = await job.findById(appl)
                select.applied_to.push({
                    title: targetJob.title,
                    company: targetJob.basic_info.company_name,
                    location: targetJob.basic_info.location
                })
            }
        }
        if(d.data=='network' && d.status){
            select.newtwork = user.personal.friendsList.list;
        }
        if(d.data=='comments in posts' && d.status){
            select.comments = []
            if(!user.personal.myComments.length) continue;

            for(let comm of user.personal.myComments){
                let targetComm = await comment.findById(comm)
                let targetPost = await post.findById(targetComm.post)
                select.comments.push({comment: targetComm.content, onPost: targetPost.content})
            }
        }
    }

    return select;
}

module.exports.serUser = serUser;
module.exports.selector = selector;