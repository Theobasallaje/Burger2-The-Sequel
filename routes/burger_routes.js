var db = require("../models");

module.exports = function(app) {
  app.get("/burgers", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Burger.findAll({}).then(function(dbBurger) {
      console.log(dbBurger);
      res.render("index", dbBurger);
      //res.json(dbBurger); when not using handlebars
    });
  });

  app.get("/api/authors/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Author.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.post("/burgers", function(req, res) {
    db.Burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};
