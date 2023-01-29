class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("Login realizado com sucesso")
        } else {
            console.log("Email ou senha diferentes")
        }
    }
}

const UserOne = new User("Alexandre Shiotuki", "email@gmail.com", "alexgostosao0711")
UserOne.login("email@gmail.com", "alexgostosao0711")

