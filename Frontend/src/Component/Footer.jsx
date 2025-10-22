// index.js (Backend)
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allow only your frontend Render domain
app.use(cors({
  origin: ["https://gautamportfolie.onrender.com"], // your frontend link
  methods: ["GET", "POST"],
}));

app.use(express.json());

// ✅ Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://gautamkumar:Mypassword@cluster0.eye2sfh.mongodb.net/PortfolioDB?retryWrites=true&w=majority")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

// ✅ Model
const Feedback = mongoose.model("Feedback", feedbackSchema);

// ✅ POST: Save feedback
app.post("/feedback", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(201).json({ success: true, message: "Feedback saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving feedback:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// ✅ GET: Fetch all feedback
app.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    console.error("❌ Error fetching feedback:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at port ${PORT}`);
});
