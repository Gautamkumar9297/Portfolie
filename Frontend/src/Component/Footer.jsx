// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allow your frontend domain
app.use(
  cors({
    origin: ["https://gautamportfolie.onrender.com"], // your frontend Render domain
    methods: ["GET", "POST"],
  })
);

// ✅ Middleware
app.use(express.json());

// ✅ MongoDB Atlas connection
mongoose
  .connect(
    "mongodb+srv://gautamkumar:<YOUR_PASSWORD>@cluster0.eye2sfh.mongodb.net/PortfolioDB",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Schema
const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// ✅ Model
const Feedback = mongoose.model("Feedback", feedbackSchema);

// ✅ Root route (for Render health check)
app.get("/", (req, res) => {
  res.send("🚀 Portfolio Feedback Backend Running Successfully!");
});

// ✅ POST route - Save feedback
app.post("/feedback", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(201).json({ success: true, message: "Feedback saved successfully!" });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ GET route - Retrieve all feedback
app.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error retrieving feedback:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
