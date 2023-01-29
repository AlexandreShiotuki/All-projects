const Author = require("./Author");

const john = new Author ("John Doe")

const post = john.writePost("Título post", "Lorem ipsum")

post.addComment("Alexandre", "Se liga nessa dica")
post.addComment("Guilherme", "Dica ruim")

console.log(john)
console.log(post)