import axios from "axios";

const getProductsFromServer = async () => {
  return await axios({
    method: "GET",
    url: `https://dummyjson.com/products`,
  });
};

export default getProductsFromServer;
