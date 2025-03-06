'use client';

import React, { useState } from 'react';
import { createProduct } from '../api/apiCall';

interface ProductFormData {
  name: string;
  image: string;
  price: string;
  description: string;
  createdAt: string;
}

const ProductForm: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    image: '',
    price: '',
    description: '',
    createdAt: new Date().toISOString()
  });
  
  // UI states
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Ensure this is called to prevent default form submission
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      console.log("Submitting form data:", formData);
      
      // Convert price to string with two decimal places to ensure proper format
      const formattedData = {
        ...formData,
        price: parseFloat(formData.price).toFixed(2)
      };
      
      const response = await createProduct(formattedData);
      console.log("API Response:", response);
      
      if (response.success) {
        setSuccess(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          image: '',
          price: '',
          description: '',
          createdAt: new Date().toISOString()
        });
      } else {
        setError(response.message || 'Failed to create product');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          Product created successfully!
        </div>
      )}
      
      <form 
        onSubmit={handleSubmit} 
        className="space-y-4"
        method="POST" // Explicitly set method to POST
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
          />
        </div>
        
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/image.jpg"
          />
          {formData.image && (
            <div className="mt-2">
              <img 
                src={formData.image} 
                alt="Preview" 
                className="h-32 object-cover rounded-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Invalid+Image';
                }}
              />
            </div>
          )}
        </div>
        
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              pattern="^\d+(\.\d{1,2})?$"
              className="w-full pl-8 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0.00"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product description"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            loading ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
          } transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        >
          {loading ? 'Creating Product...' : 'Create Product'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
