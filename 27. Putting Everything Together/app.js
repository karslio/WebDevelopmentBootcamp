//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://karslio:test123@cluster0-onaqv.mongodb.net/todolistDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const itemsSchema = { name: String };
 
const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({ name: "Welcome to your todoList!" });
const item2 = new Item({ name: "hit the + button to aff a new item" });
const item3 = new Item({ name: "<-- Hit this to delete an item." });

const defaultsItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", function(req, res) {
  Item.find({}, function(err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultsItems, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Succesfully saved defaultItems to todolistDB ");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  });
});

app.post("/", function(req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({ name: itemName });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName }, function(err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});

app.post("/delete", function(req, res) {
  const checkedItem = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItem, function(err) {
      if (!err) {
        console.log("Succesfully deleted checkedItem from todolistDB ");
      }
    });
    res.redirect("/");
  } else {
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItem } } },
      function(err, foundList) {
        if (!err) {
          res.redirect("/" + listName);
        }
      }
    );
  }
});

app.get("/:customListName", function(req, res) {
  customListName = _.capitalize(req.params.customListName);
  List.findOne({ name: customListName }, function(err, foundList) {
    if (!err) {
      if (!foundList) {
        const list = new List({
          name: customListName,
          items: defaultsItems
        });
        list.save();
        res.redirect("/" + customListName);
      } else {
        res.render("list", {
          listTitle: foundList.name,
          newListItems: foundList.items
        });
      }
    }
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
