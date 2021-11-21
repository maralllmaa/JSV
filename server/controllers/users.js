const User = require('../models/user');
class UserController {
    async registerUser(req, res){
        const {username, email, number, password} = req.body;
        const user = new User({
            username: username,
            email: email,
            number: number,
            password: password
        })

        try {
            const result = await user.save()
            console.log(result);
            res.json({
                message: 'Amjilttai burtgegdlee'
            })
        } catch (err){
            res.json({
                err: err.message
            })
        }
    }

    async getUsers(req, res){
        try {
            const users = await User.find();
            res.json({
                users: users
            })
        } catch (err){
            res.json({
                message: err.message
            })
        }
    }

    async updateInfo(req, res){
        const {userId, username, email, number , password} = req.body;
        try {
            const user = await User.findById(userId);
            // if(!user){
            //     throw new Error('Алдаа гарлаа')
            // }
            user.username = username;
            user.email = email;
            user.number = number;
            user.password = password;
            const result = await user.save();
            res.json({
                result: result,
                message: 'success'
            })
        } catch (err) {
            res.json({
                message: err.message
            })
        }
    }

    async deleteUser(req, res){
        const userId = req.params.id;
        try {
            const result = await User.findByIdAndRemove(userId);
            res.json({
                result: result,
                message: 'success'
            })
        } catch(err){
            res.json({
                message: err.message
            })
        }
    }
}

module.exports = new UserController()

// status code - 200
// status code - 201 

// 400 - bad request , 404 - page not found
// 501 - , 503 - unauthorized 