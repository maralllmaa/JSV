export class User {
    constructor(username, email, number, password, dob){
        this.username = username;
        this.email = email;
        this.number = number;
        this.password = password;
        this.dob = dob;
        this.id = Math.random().toString().split('.')[1];
    }
}

export class Post {
    constructor(title, content, userId, created){
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.created = created;
        this.id = Math.random().toString().split('.')[1];
    }
}

export class Comment {
    // text, created, userId, postId, id
}

// export class Reply extends Comment {
//     constructor(text, created, userId, postId, id){
//         super(text, created, userId, postId, id);
//     }
// }