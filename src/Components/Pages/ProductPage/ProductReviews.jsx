// File: ProductReviews.jsx
import React from 'react';

const ProductReviews = ({ reviews }) => (
 <div className="bg-white rounded-xl p-6">
    <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">Customer Reviews</h2>
    <div className="space-y-4">
      {reviews?.length > 0 ? reviews.map((review, i) => (
        <div key={i} className="border border-gray-200 p-4 rounded-lg bg-gray-50">
          <p className="font-semibold text-lg text-gray-900">{review.reviewerName}</p>
          <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
          <div className="text-yellow-500 text-base">
            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
          </div>
          <p className="mt-2 text-gray-700 leading-relaxed">{review.comment}</p>
        </div>
      )) : <p className="text-gray-500">No reviews available.</p>}
    </div>
  </div>
);

export default ProductReviews;