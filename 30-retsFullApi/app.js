//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

app
  .route("/articles")

  .get(function(req, res) {
    Article.find(function(err, foundArticles) {
      res.send(foundArticles);
    });
  })

  .post(function(req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });
    newArticle.save(function(err) {
      if (!err) {
        res.send("Succesfully added a new artcles");
      } else {
        res.send(err);
      }
    });
  })

  .delete(function(req, res) {
    Article.deleteMany(function(err) {
      if (!err) {
        res.send("Succesfully deleted all articles");
      } else {
        res.send(err);
      }
    });
  });

app
  .route("/articles/:articlesTitle")

  .get(function(req, res) {
    Article.findOne({ title: req.params.articlesTitle }, function(
      err,
      foudArticle
    ) {
      if (foudArticle) {
        res.send(foudArticle);
      } else {
        res.send("No articles matching that title was found");
      }
    });
  })

  .put(function(req, res) {
    Article.update(
      { title: req.params.articlesTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function(err) {
        if (!err) {
          res.send("succesfulley updated");
        }
      }
    );
  })

  .patch(function(req, res) {
    Article.update(
      { title: req.params.articlesTitle },
      { $set: req.body },
      function(err) {
        if (!err) {
          res.send("succesfulley updated");
        } else {
          res.send(err);
        }
      }
    );
  })

  .delete(function(req, res) {
    Article.deleteOne({ title: req.params.articlesTitle }, function(err) {
      if (!err) {
        res.send("succesfulley deleted found item");
      } else {
        res.send(err);
      }
    });
  });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
