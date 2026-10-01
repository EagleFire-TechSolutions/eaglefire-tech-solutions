import rateLimit from "express-rate-limit";

const contactRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    message: {
        message: "Too many contact requests. Please try again later.",
        success: false
    }
});

export default contactRateLimit;