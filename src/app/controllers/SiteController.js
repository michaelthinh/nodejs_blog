const Course = require("../models/Course");

class SiteController {
  // [GET]-/
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = courses.map((courses) => courses.toObject());
        res.render("home", { courses });
      })
      .catch(next);
    // res.render("home");
  }
  // [GET]-/search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
