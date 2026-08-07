const express = require("express");
const router = express.Router();
const { login, getMe, seedAdmin, changePassword } = require("../controllers/authController");
const { protect } = require("../middleware/auth");

router.post("/login", login);
router.post("/seed", seedAdmin);          // Run once to create default admin
router.get("/me", protect, getMe);
router.put("/change-password", protect, changePassword);

module.exports = router;
