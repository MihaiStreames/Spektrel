const { hash } = require("bcryptjs");
const Joi = require("joi");
const db = require("./connection");
const bcrypt = require("bcryptjs");
const users = db.get("users");
const urlRegEx = /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g
const defaultProfilePic = "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg";
const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(15).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(15).required(),
    profilePicture: Joi.string()
});

function getAll(){
    return users.find();
}

async function create(user) {
    const result = schema.validate(user);
    let exists = await users.findOne({username: user.username});
    if(exists) return result.error = {message: "Username taken"};
    if (result.error == null) {
        user.password = await bcrypt.hash(user.password, 8)
        user.createdAt = new Date();
        if (!user.profilePicture) {
            user.profilePicture = defaultProfilePic;
        } else if(! user.profilePicture.match(urlRegEx)) return result.error = {message: "Invalid profile picture link"};
        
        return users.insert(user)
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    getAll
};