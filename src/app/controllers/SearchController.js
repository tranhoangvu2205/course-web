const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SearchController {
  search(req, res, next) {
    Course.find({ name: { $regex: req.query.key, $options: "i" } })
      .then((courses) => {
        if (courses.length > 0) {
          res.render("search", {
            courses: mutipleMongooseToObject(courses),
          });
        } else {
          res.send("Không tìm thấy");
        }
      })
      .catch(next);
  }
}

module.exports = new SearchController();
