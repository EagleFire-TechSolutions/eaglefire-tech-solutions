import contactForm from "../controllers/contact.controller.js";
import validateContactForm from "../midlewares/error.middleware.js";
import contactRateLimit from "../midlewares/contact.rarelimit.middelware.js";
import express from "express";

const router = express.Router();

router.post("/contact", contactRateLimit, validateContactForm, contactForm);

export default router;