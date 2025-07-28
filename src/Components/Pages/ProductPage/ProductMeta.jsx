// File: ProductMeta.jsx
import React from 'react';

const ProductMeta = ({ product }) => (
  <div className="bg-white rounded-xl p-6 overflow-x-auto">
    <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Product Details</h3>
    <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
      <tbody>
        <tr className="border-b">
          <th className="px-4 py-3 border-r bg-gray-50">Brand</th>
          <td className="px-4 py-3">{product.brand || 'No Brand'}</td>
        </tr>
        <tr className="border-b">
          <th className="px-4 py-3 border-r bg-gray-50">Category</th>
          <td className="px-4 py-3">{product.category}</td>
        </tr>
        <tr className="border-b">
          <th className="px-4 py-3 border-r bg-gray-50">SKU</th>
          <td className="px-4 py-3">{product.sku}</td>
        </tr>
        <tr className="border-b">
          <th className="px-4 py-3 border-r bg-gray-50">Minimum Order</th>
          <td className="px-4 py-3">{product.minimumOrderQuantity}</td>
        </tr>
        <tr className="border-b">
          <th className="px-4 py-3 border-r bg-gray-50">Availability</th>
          <td className="px-4 py-3">{product.availabilityStatus}</td>
        </tr>
        <tr className="border-b">
          <th className="px-4 py-3 border-r bg-gray-50">Return Policy</th>
          <td className="px-4 py-3">{product.returnPolicy}</td>
        </tr>
        <tr className="border-b">
          <th className="px-4 py-3 border-r bg-gray-50">Warranty</th>
          <td className="px-4 py-3">{product.warrantyInformation}</td>
        </tr>
        <tr className="border-b">
          <th className="px-4 py-3 border-r bg-gray-50">Shipping</th>
          <td className="px-4 py-3">{product.shippingInformation}</td>
        </tr>
        <tr className="border-b">
          <th className="px-4 py-3 border-r bg-gray-50">Weight</th>
          <td className="px-4 py-3">{product.weight} kg</td>
        </tr>
        <tr className="border-b">
          <th className="px-4 py-3 border-r bg-gray-50">Dimensions</th>
          <td className="px-4 py-3">
            {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
          </td>
        </tr>
        <tr className="border-b">
          <th className="px-4 py-3 border-r bg-gray-50">Barcode</th>
          <td className="px-4 py-3">{product.meta?.barcode}</td>
        </tr>
        <tr>
          <th className="px-4 py-3 border-r bg-gray-50 align-top">QR Code</th>
          <td className="px-4 py-3">
            <img src={product.meta?.qrCode} alt="QR Code" className="w-24" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProductMeta;
