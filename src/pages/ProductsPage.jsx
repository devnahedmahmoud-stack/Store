import { handleGetAxios } from "@/api/products";
import ProductsLoader from "@/components/loaders/ProductsLoader";
import { ProductCard } from "@/components/product/ProductCard";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ProductsPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () => handleGetAxios("/products"),
  });

  if (isLoading) return <ProductsLoader title={"Products Loading..."} />;
  if (isError) return <p>{error.message}</p>;
  
  return (
    <section className="p-10">
      <h2 className="text-center font-bold text-xl mb-10">Products</h2>
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data?.products?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.thumbnail}
            category={product.category}
            productId={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
