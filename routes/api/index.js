const router = require("express").Router();
const bookRoutes = require("./books");
const ordenRoutes = require("./orden");

// Book routes
router.use("/books", bookRoutes);
router.use("/orden", ordenRoutes);

module.exports = router;
