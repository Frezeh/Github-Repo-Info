import rateLimit from "express-rate-limit";

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 Mins
  max: 100,
});

export default limiter;
