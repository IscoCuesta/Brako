const router = require("express").Router();
const ordenController = require("../../controllers/ordenController");

// Matches with "/api/books"
router.route("/")
  .get(ordenController.findAll)
  .post(ordenController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(ordenController.findById)
  .put(ordenController.update)
  .delete(ordenController.remove);

module.exports = router;
