import prisma from "../config/db.js";

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });
    let cartData = userData.cartData ?? {};

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await prisma.user.update({
      where: { id: Number(userId) },
      data: { cartData },
    });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateToCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });
    let cartData = userData.cartData ?? {};
    cartData[itemId][size] = quantity;

    await prisma.user.update({
      where: { id: Number(userId) },
      data: { cartData },
    });
    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });
    const cartData = userData.cartData ?? {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateToCart, getUserCart };