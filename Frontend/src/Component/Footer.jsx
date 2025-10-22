import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allow only your frontend Render domain
app.use(cors({
  origin: ["https://gautamportfolie.onrender.com"],
  methods: ["GET", "POST"],
}));

app.use(express.json());

// ✅ Connect to MongoDB Atlas (replace with your DB name)
mongoose.connect("mongodb+srv://gautamkumar:Mypassword@cluster0.eye2sfh.mongodb.net/PortfolioDB")
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

// ✅ POST route: Save feedback
app.post("/feedback", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(201).json({ success: true, message: "Feedback saved successfully!" });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// ✅ GET route: Get all feedback
app.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
