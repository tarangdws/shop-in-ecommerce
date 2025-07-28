import { useParams } from "react-router-dom";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductMeta from "./ProductMeta";
import ProductReviews from "./ProductReviews";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:');
      }
    };

    fetchProductDetails();
  }, [id]);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-14">
        {product ? (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ProductImages images={product.images} thumbnail={product.thumbnail} title={product.title} />
              <ProductInfo product={product} />
            </div>
            <ProductMeta product={product} />
            <ProductReviews reviews={product.reviews} />
          </div>
        ) : (
          <div className="flex justify-center items-center h-96">
            <BarLoader color="#eb6d20" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
