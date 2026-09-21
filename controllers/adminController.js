import prisma from "../config/db.js";
import adminAuth from "../middleware/adminAuth.js";

// INFO: Get all users (admin only)
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, cartData: true }
    });
    res.json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { getAllUsers };
