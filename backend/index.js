require("dotenv").config(); // load .env variables
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// ✅ Connect to MongoDB Atlas using MONGO_URI from .env
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 🧠 Mongoose Schema and Model
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// 🚀 Express setup
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://dreamdestinationpanipat.netlify.app",
  "http://localhost:3000", // optional for local dev
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);


app.use(express.json()); // Replaced body-parser

// 🔄 Default test route
app.get("/", (req, res) => {
  res.send("✅ Dream Destination backend is running!");
});

// 📥 POST: Handle contact form submission
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("✅ New contact saved:", name);
    res.json({ success: true, message: "Your message has been saved!" });
  } catch (error) {
    console.error("❌ Failed to save contact:", error);
    res.status(500).json({ success: false, message: "Error saving message" });
  }
});

// 📤 GET: Admin fetches all contact submissions
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error("❌ Failed to fetch contacts:", err);
    res.status(500).json({ error: "Error fetching contacts" });
  }
});

// 🗑 DELETE: Remove a contact by ID
app.delete("/api/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.json({ success: true, message: "Contact deleted successfully" });
  } catch (err) {
    console.error("❌ Failed to delete contact:", err);
    res.status(500).json({ success: false, message: "Error deleting contact" });
  }
});

// 🧨 Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT} or on Render`);
});
