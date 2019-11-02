myObj = {
  _id: 1,
  name: "Pen",
  price: 1.2
};

myObj = {
  _id: 2,
  name: "Pencil",
  price: 0.8
};

db.products.insert({
  _id: 3,
  name: "rubber",
  price: 1.3,
  stock: 43,
  reviews: [
    {
      authorNmae: "Sally",
      rating: 5,
      review: "best rubber ever!"
    },
    {
      authorNmae: "Jhon",
      rating: 5,
      review: "Awesome rubber!"
    }
  ]
});

db.products.insert({
  _id: 2,
  name: "Pencil",
  price: 0.8,
  stock: 12,
  reviews: [
    {
      authorNmae: "James",
      rating: 5,
      review: "Fantastic"
    },
    {
      authorNmae: "Jone",
      rating: 5,
      review: "The best pencil I've used in my live."
    }
  ]
});



