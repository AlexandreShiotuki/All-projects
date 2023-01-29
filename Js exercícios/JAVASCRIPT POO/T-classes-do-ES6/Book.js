class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }

    publish() {
        this.published = true
    }
}

const twd = new Book ("The walking dead")
twd.publish()

console.log(twd)