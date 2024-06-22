import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (!bearerHeader) {
    return res.status(401).json({ error: "Authorization header is missing" });
  }

  const bearer = bearerHeader.split(" ");
  const token = bearer[1];

  if (!token) {
    return res.status(401).json({ error: "Token is missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("JWT verification error:", err);
      return res.status(403).json({ error: "Unauthorized access" });
    }
    req.user = user;
    next();
  });
};

export default authenticateToken;
