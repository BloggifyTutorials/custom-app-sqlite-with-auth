const { User } = Bloggify.models;

const users = [{
    email: "admin@bloggify.org",
    password: "foobar#42",
    confirmed: true,
    role: "ADMIN",
    country: "RO"
}]

Promise.all(users.map(c => User.create(c)))
