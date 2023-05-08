import axios from "axios";

const getProductsFromServer = async (category = null) => {
  category =
    category === "All" ? "" : category != "All" && category ? category : "";
  //! Not the practice that I would normally do, but products getter will also initiate backend data collection
  // ====================================================================================================
  await axios({
    method: "GET",
    url: `http://127.0.0.1:8000/api/products/collect/`,
  });
  // ====================================================================================================

  return await axios({
    method: "GET",
    url: `http://127.0.0.1:8000/api/products/list/`,
    params: {
      category: category,
    },
  });
};

export default getProductsFromServer;
