const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/roboSurvey"
);

const userSeed = [
  {
    firstname: "Joed",
    lastname: "Machado",
    email: "joed@mail.um",
    login: "joed",
    password: "password",
    role: "user"
  },
  {
    firstname: "Oscar",
    lastname: "Fuentes",
    email: "oscar@mail.um",
    login: "oscar",
    password: "password",
    role: "user"
  },
  {
    firstname: "Jose",
    lastname: "De las Salas",
    email: "jose@mail.um",
    login: "jose",
    password: "password",
    role: "manager"
  },
  {
    firstname: "Brad",
    lastname: "Fabian",
    email: "brad@mail.um",
    login: "brad",
    password: "password",
    role: "user"
  }
  
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
    //process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Survey  
    .remove({})
    .then(() => db.User.collection.insertMany(surveySeed))
    .then(data => {
        console.log(data.result.n + " survey records inserted!");
        //process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

    process.exit(0);
