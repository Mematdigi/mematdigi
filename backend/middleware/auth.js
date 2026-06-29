const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Strict: requires a valid token, blocks otherwise
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id).select("-password");
    if (!req.admin) {
      return res.status(401).json({ success: false, message: "Admin not found" });
    }
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Token invalid or expired" });
  }
};

// Soft: attaches req.admin when a valid token is present, but never blocks.
// Used for public routes that should reveal extra data (e.g. draft preview)
// to logged-in admins only.
const attachAdminIfPresent = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select("-password");
    }
  } catch (err) {
    // ignore – treat as anonymous visitor
  }
  next();
};

module.exports = { protect, attachAdminIfPresent };
