
let users = 
[
    {
        user: "admin",
        password: "admin",
        name: "admin"
    }
]

class Users {
    getUsers(){
        return users
    }

    appendUser(user){
        users.push(user)
    }
}

export default Users;