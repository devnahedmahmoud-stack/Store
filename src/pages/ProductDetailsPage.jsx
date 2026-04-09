import { handleGet, handleGetAxios } from "@/api/products";
import ProductsLoader from "@/components/loaders/ProductsLoader";
import ProductDetails from "@/components/product/ProductDetails";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { data ,isPending,isError} = useQuery({
    queryKey: ["productDetails", productId],
    queryFn: () => handleGetAxios(`/products/${productId}`),
  });
  
  if(isPending) return <ProductsLoader title={"Product Details Loading..."} />;
  if(isError) return <p>An error occurred while fetching product details.</p>

  return <ProductDetails  productData={data}/>
};

export default ProductDetailsPage;
