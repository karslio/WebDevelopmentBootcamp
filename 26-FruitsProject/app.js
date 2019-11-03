const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  name: "Apple",
  score: 8,
  review: "Great fruit"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "oguzhan",
  age: 31
});

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 15,
  review: "i like it"
});

const orange = new Fruit({
  name: "Oorange",
  score: 25,
  review: "the best fruit"
});

const banana = new Fruit({
  name: "Banana",
  score: 35,
  review: "too sour for me"
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB ");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(fruit => {
      console.log(fruit.name);
    });
  }
});

