import jwt from "jsonwebtoken";

//Function to decode JWT token to get clerk id

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const token_decode = jwt.decode(token);

    // Clerk JWT payload usually contains `sub` (subject) with the user id.
    // Use that as clerkId fallback.
    const clerkId = token_decode?.clerkId || token_decode?.sub;

    if (!clerkId) {
      return res.json({
        success: false,
        message: "Clerk ID not found in token",
      });
    }

    req.body = req.body || {};
    req.body.clerkId = clerkId;
    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
