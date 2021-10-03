export class User {
    constructor(username, email, number, password, dob){
        this.username = username;
        this.email = email;
        this.number = number;
        this.password = password;
        this.dob = dob;
        this.posts = [];
    }
}

export class Post {
    constructor(){
        this.title = 'jhfdkjghkdj'
    }
}