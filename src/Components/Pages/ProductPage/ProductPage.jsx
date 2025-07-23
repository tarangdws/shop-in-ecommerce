import React, { useEffect, useState } from 'react'
import { BiCart } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import {BarLoader} from 'react-spinners'

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

useEffect(() => {
  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.error('Error fetching product details:')
    }
  }

  fetchProductDetails()
}, [id])


  return (
    <>
        <div className="container mx-auto px-4 py-10">
        {product ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                <img
                    src={product.images[0] || product.thumbnail}
                    alt={product.title}
                    className="w-full h-auto object-cover rounded-2xl"
                />
                </div>
                <div className="grid grid-cols-4 gap-2">
                {product.images?.slice(0, 4).map((img, i) => (
                    <img
                    key={i}
                    src={img}
                    alt={`preview-${i}`}
                    className="w-full h-40 object-cover rounded-md border transition-all"
                    />
                ))}
                </div>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>

                <div className="space-y-1">
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                    <del className="text-gray-400 text-base">₹{Math.round(product.price * 1.2)}</del>
                    <span className="text-green-600 text-sm font-medium">
                    ({product.discountPercentage}% OFF)
                    </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <span
                    className={`px-2 py-1 rounded-full ${
                        product.rating >= 4
                        ? 'bg-green-100 text-green-700'
                        : product.rating >= 3
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                    >
                    {product.rating} ★
                    </span>
                    <span className="text-gray-500">({product.stock} in stock)</span>
                </div>
                </div>

                <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                <p>
                    <strong>Brand:</strong> {product.brand}
                </p>
                <p>
                    <strong>Category:</strong> {product.category}
                </p>
                <p>
                    <strong>Delivery:</strong> Free delivery within 5–7 days
                </p>
                <p>
                    <strong>Return Policy:</strong> 7-day easy return
                </p>
                </div>

                <button className="w-full sm:w-1/2 flex justify-center items-center gap-3 px-6 py-3 rounded-xl bg-thick-black text-white hover:bg-primary transition-all text-lg font-semibold shadow-md">
                <span>Add to cart</span>
                <BiCart className="text-2xl" />
                </button>
            </div>
            </div>
        ) : (
            <div className='flex justify-center items-center h-96'>
            <BarLoader color='#eb6d20'  />
            </div>
        )}
        </div>
    </>
  )
}

export default ProductPage
