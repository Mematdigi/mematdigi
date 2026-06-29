const Enquiry = require("../models/Enquiry");

// ── PUBLIC: submit an enquiry ───────────────────────────────────────────────
// @route POST /api/enquiries
const createEnquiry = async (req, res, next) => {
  try {
    const { name, email, message, phone, subject, source } = req.body;
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Name, email and message are required." });
    }
    const enquiry = await Enquiry.create({
      name,
      email,
      phone: phone || "",
      subject: subject || "",
      message,
      source: source || "contact",
      ipAddress: req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "",
    });
    res.status(201).json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you shortly.",
      data: { id: enquiry._id },
    });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: list enquiries ───────────────────────────────────────────────────
// @route GET /api/enquiries
const getEnquiries = async (req, res, next) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status && status !== "all") filter.status = status;

    const [data, counts] = await Promise.all([
      Enquiry.find(filter).sort({ createdAt: -1 }).limit(300).lean(),
      Enquiry.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]),
    ]);

    const statusCounts = { all: 0, new: 0, read: 0, replied: 0, archived: 0 };
    counts.forEach((c) => {
      statusCounts[c._id] = c.count;
      statusCounts.all += c.count;
    });

    res.json({ success: true, data, statusCounts });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: update status ────────────────────────────────────────────────────
// @route PATCH /api/enquiries/:id/status
const updateEnquiryStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!["new", "read", "replied", "archived"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!enquiry) return res.status(404).json({ success: false, message: "Enquiry not found" });
    res.json({ success: true, data: enquiry });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: delete ───────────────────────────────────────────────────────────
// @route DELETE /api/enquiries/:id
const deleteEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) return res.status(404).json({ success: false, message: "Enquiry not found" });
    res.json({ success: true, message: "Enquiry deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = { createEnquiry, getEnquiries, updateEnquiryStatus, deleteEnquiry };
