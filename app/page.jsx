import React from "react";
import axios from "axios";
import ListProduct from "../components/products/ListProduct";


const getProducts = async () => {
  const { data } = await axios.get(`${process.env.Api_URL}/api/products`);
  return data;
};

const Homepage = async () => {
  const productsData = await getProducts();

  return (
    <div>
      <ListProduct data={productsData} />
    </div>
  );
};

export default Homepage;
