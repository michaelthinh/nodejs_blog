const Course = require("../models/Course");
const { MongooseToObject } = require("../../util/mongoose");
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: MongooseToObject(course) });
        console.log(course);
      })
      .catch(next);
  }
}

module.exports = new CourseController();
