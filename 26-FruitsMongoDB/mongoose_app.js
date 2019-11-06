const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDBD", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please check your data entry, no name specified! "]
  },
  score: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  score: 8,
  review: "deliciosus"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "great fruit"
});

const mango = new Fruit({
  name: "mango",
  score: 6,
  review: "decent fruit"
});

// mango.save();

Person.updateOne({ name: "oguzhan" }, { favoriteFruit: "Oorange" }, function(
  err
) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully updated your document.");
  }
});

// const person = new Person({
//   name: "sevilay",
//   age: 27,
//   favoriteFruit: pineapple
// });

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 15,
//   review: "i like it"
// });

// const orange = new Fruit({
//   name: "Oorange",
//   score: 25,
//   review: "the best fruit"
// });

// const banana = new Fruit({
//   name: "Banana",
//   score: 35,
//   review: "too sour for me"
// });

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
    mongoose.connection.close();
    fruits.forEach(fruit => {
      console.log(fruit);
    });
  }
});

// Fruit.updateOne(
//   { _id: "5dbebc09e657612e7cf80241" },
//   { name: "peach" },
//   function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Succesfully updated your document.");
//     }
//   }
// );

// Fruit.deleteOne({ _id: "5dbebc09e657612e7cf80241" }, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted one fruit");
//   }
// });

// Person.find(function(err, people) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     people.forEach(person => {
//       console.log(person);
//     });
//   }
// });

// Person.deleteMany({ name: "oguzhan" }, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted all people");
//   }
// });
