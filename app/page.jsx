import React from "react";
import axios from "axios";
import ListProduct from "../components/products/ListProduct";

import queryString from 'query-string'

const getProducts = async (searhParams) => {

  const urlParams = {
    keyword : searhParams.search,
    page : searhParams.page,
    category:searhParams.category,
    "ratings[gte]":searhParams.ratings
  }

  const queryParams  = queryString.stringify(urlParams)

  const { data } = await axios.get(`${process.env.Api_URL}/api/products?`+queryParams);
  return data;

};

const Homepage = async ({searchParams}) => {
  const productsData = await getProducts(searchParams);

  return (
    <div>
      <ListProduct data={productsData} />
    </div>
  );
};

export default Homepage;
