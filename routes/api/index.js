const router = require("express").Router();
const ndcRoute = require("./NDC");

// Signin routes
router.use("/NDC", ndcRoute);

module.exports = router;
