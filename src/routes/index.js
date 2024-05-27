const meRouter = require("./me");
const homeRouter = require("./home");
const coursesRouter = require("./courses");
const searchRouter = require("./search");
function route(app) {
  app.use("/me", meRouter);
  app.use("/search", searchRouter);
  app.use("/courses", coursesRouter);
  app.use("/", homeRouter);
}

module.exports = route;
