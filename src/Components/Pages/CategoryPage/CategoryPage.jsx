import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../General/ProductCard";
import { BarLoader } from "react-spinners";

const CategoryPage = () => {
  const { slug } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${slug}`
        );
        const data = await response.json();
        setCategoryData(data.products || []);
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryData();
  }, [slug]);

  return (
    <div className="mx-auto">
      <div className="bg-primary/50 py-8 px-2 sm:py-16">
        <h1 className="text-xl sm:text-3xl font-extrabold text-center capitalize mb-2">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="text-center text-sm sm:text-base">
          Discover our collection of{" "}
          <span className="capitalize">{slug.replace(/-/g, " ")}</span>{" "}
          products.
        </p>
      </div>
      <div className="container mx-auto px-4 !py-12">
        {loading && (
          <div className="flex justify-center items-center h-96">
            <BarLoader color="#eb6d20" />
          </div>
        )}

        {!loading && categoryData.length === 0 && (
          <p className="text-center text-red-500">
            No products found in this category.
          </p>
        )}

        <div className="grid gap-2 sm:gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {categoryData.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
