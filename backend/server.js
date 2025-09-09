import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// --- MongoDB connect ---
await mongoose.connect(process.env.MONGO_URI, { dbName: process.env.MONGO_DB || "portfolio" })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => { console.error(err); process.exit(1); });

// Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String
}, { timestamps: true });
const Contact = mongoose.model("Contact", ContactSchema);

// Rate limit
app.use("/api/contact", rateLimit({ windowMs: 60 * 1000, max: 5 }));

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

// API route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email and message are required." });
    }

    // Save to MongoDB
    const doc = await Contact.create({ name, email, phone, subject, message });

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: subject ? `[Portfolio] ${subject}` : "[Portfolio] New message",
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\n\n${message}`
    });

    res.json({ ok: true, id: doc._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit message" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 API running on http://localhost:${PORT}`));
