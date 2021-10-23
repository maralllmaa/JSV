const User = require('../model/user');
exports.registerUser = (req, res) => {
    const {username, email, number, password} = req.body;
    console.log(username);
    const user = new User({
        username: username,
        email: email,
        number: number,
        password: password
    })

    user.save()
        .then(result => {
            res.json({
                message: "Амжилттай бүртгэгдлээ"
            })
        })
        .catch(err => console.log(err))
}

exports.getAllUsers = (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => console.log(err))
}