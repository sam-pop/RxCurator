const router = require("express").Router();
const signinRoutes = require("./signin");

// Signin routes
router.use("/signin", signinRoutes);

module.exports = router;
