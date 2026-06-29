const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });
};

// @desc    Login admin
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const token = generateToken(admin._id);

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get logged-in admin profile
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res, next) => {
  try {
    res.json({
      success: true,
      admin: {
        id: req.admin._id,
        name: req.admin.name,
        email: req.admin.email,
        role: req.admin.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Seed default admin (run once to create first admin)
// @route   POST /api/auth/seed
// @access  Public (disable after first use in production)
const seedAdmin = async (req, res, next) => {
  try {
    const existingAdmin = await Admin.findOne({ email: "admin@memat.com" });
    if (existingAdmin) {
      return res.status(400).json({ success: false, message: "Admin already exists. Use login." });
    }

    const admin = await Admin.create({
      name: "Memat Admin",
      email: "admin@memat.com",
      password: "Admin@123",
      role: "superadmin",
    });

    res.status(201).json({
      success: true,
      message: "Default admin created successfully",
      credentials: {
        email: "admin@memat.com",
        password: "Admin@123",
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Change admin password
// @route   PUT /api/auth/change-password
// @access  Private
const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const admin = await Admin.findById(req.admin._id);
    const isMatch = await admin.comparePassword(currentPassword);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Current password is incorrect" });
    }

    admin.password = newPassword;
    await admin.save();

    res.json({ success: true, message: "Password changed successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = { login, getMe, seedAdmin, changePassword };
