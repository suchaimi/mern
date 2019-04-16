const express = require("express");
const router = express.Router();

// @route   : Get api/users/test
// @desc    : Test Users Route
// @access  : Public
router.get("/test", (req, res) => res.json({
  msg: "Users API Page"
}));

module.exports = router;