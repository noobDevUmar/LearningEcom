'use client'
import React from 'react'
import Filters from '../layout/Filters';
import Link from 'next/link';
import StarRatings from 'react-star-ratings';
import ProductItem from './ProductItem';
import CustomPagination from "@/components/layout/CustomPagination"

const ListProduct = ({data}) => {
  return (
    <section className="py-12">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row -mx-4">
        <Filters />

        <main className="md:w-2/3 lg:w-3/4 px-3">
          {data?.products.map((product)=>(
            <ProductItem key={product._id} product={product} />
          ))}
        <CustomPagination productsCount={data?.filteredProductsCount} resPerPage={data?.resPerPage} />

        </main>
      </div>
    </div>
  </section>
  )
}

export default ListProduct