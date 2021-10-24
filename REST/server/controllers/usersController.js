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

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const { username, email, number, password } = req.body
    User.findById(userId)
        .then(user => {
            if(!user){
                throw Error('Хэрэглэгч олдсонгүй...')
            }
            user.username = username;
            user.email = email;
            user.number = number;
            user.password = password;
            return user.save();
        })
        .then(result => {
            res.json({
                message: 'Амжилттай шинэчиллээ'
            })
        })
        .catch(err => console.log(err))
}

exports.singleUser = (req, res) => {
    const userId = req.params.id;
    User.findById(userId)
        .then(user => {
            res.json(user)
        })
}