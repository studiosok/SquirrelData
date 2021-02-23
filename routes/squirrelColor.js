const router = require("express").Router();

//GET /api/home
router.get("/", async (req, res, next) => {
  try {
      await //call to squirrel db
    res.json("sending on home route");
  } catch (err) {
    next(err);
  }
});


router.use(function (req, res, next) {
  const err = new Error("Route not found");
  err.status = 404;
  next(err);
});

module.exports = router;
