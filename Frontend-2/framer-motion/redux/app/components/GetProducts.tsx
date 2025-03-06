"use client"

import React, { useState } from 'react';
import { getProducts } from '../api/apiCall';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: number | string; // Update type to handle both number and string
  description?: string;
  image?: string;
  createdAt: string;
}

// Helper function to safely format prices
const formatPrice = (price: any): string => {
  if (typeof price === 'number') {
    return price.toFixed(2);
  }
  const numPrice = Number(price);
  return !isNaN(numPrice) ? numPrice.toFixed(2) : '0.00';
};

const GetProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProducts<Product[]>();
      if (response.success && response.data) {
        setProducts(response.data);
      } else {
        setError(response.message || 'Failed to fetch products');
      }
    } catch (err) {
      setError('An error occurred while fetching products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Product Catalog</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md"
          onClick={handleGetProducts}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Products'}
        </motion.button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {products.length === 0 && !loading && !error ? (
        <div className="text-center py-12 text-gray-500">
          Click the button above to load products
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <div className="text-gray-400">No image available</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-green-600 font-bold mb-2">${formatPrice(product.price)}</p>
                {product.description && (
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                )}
                <p className="text-xs text-gray-500">
                  Added on: {new Date(product.createdAt).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {loading && (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default GetProducts;
