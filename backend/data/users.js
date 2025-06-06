import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jean dupont",
    email: "jean_dupon@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jeanne dupont",
    email: "jeanne_dupon@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
