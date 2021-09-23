const mongoose = require("mongoose");

// const Skill = new mongoose.Schema({

// })

const skillSetSchema = new mongoose.Schema({
    all_skills: [
        {
            category: {
                type: String,
                required: true,
                unique: true,
                minLength: 1
            },
            skill_list: [{ type: String, unique: true, minLength:1}]
        }
    ]
})

// const HardSkillList = new mongoose.Schema({

// })
const skillSet = mongoose.model('skillSet', skillSetSchema);
module.exports ={
    skillSet: skillSet,
}