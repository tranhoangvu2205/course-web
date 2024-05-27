const express = require("express");
const router = express.Router();
const searchController = require("../app/controllers/SearchController.js");

router.get("/", searchController.search);
// router.post("/store", coursesController.store);
// router.get("/:id/edit", coursesController.edit);
// router.put("/:id", coursesController.update);
// router.delete("/:id", coursesController.delete);
// router.get("/:slug", coursesController.show);

module.exports = router;
