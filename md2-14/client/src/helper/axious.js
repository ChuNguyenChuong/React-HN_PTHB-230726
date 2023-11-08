import axios from "axios";

async function updateCartApi(userId, cartList) {
  const checkCartInDb = await axios.get(`http://localhost:3000/cart?userId=${userId}`);

  if (checkCartInDb.data.length === 0) {
    await axios.post("http://localhost:3000/cart", {
      userId: userId,
      cartList: cartList,
    });
  } else {
    const cartInDb = checkCartInDb.data[0];
    axios.put(`http://localhost:3000/cart/${cartInDb.id}`, {
      userId: userId,
      cartList: cartList,
    });
  }
}

function createProducts(formData) {
  return axios.post("http://localhost:3000/products", {
    ...formData,
  });
}

const getProductAPI = () => {
  return axios.get("http://localhost:3000/products");
};
export { updateCartApi, createProducts, getProductAPI };
