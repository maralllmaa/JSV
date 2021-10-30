import User from '../model/user';
class UserAuthentication {
    userLogin(req, res){
        const {email, password} = req.body;
        User.findOne({email: email})
            .then(user => {
                if(user.password === password){
                    res.json(user);
                }
            })
    }

    userLogout(req, res){
        
    }
}
const auth = new UserAuthentication();
export default auth;
// login => token
// cookie 
// JWT
