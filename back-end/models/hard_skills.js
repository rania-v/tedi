

const Skill = new mongoose.Schema({

})

const HardSkillCategory = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        unique: true,
        minLength: 1
    },
    skill_list: [{ type: String}]
})

// const HardSkillList = new mongoose.Schema({

// })