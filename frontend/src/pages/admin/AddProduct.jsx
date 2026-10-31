import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../services/productService';

const initialForm = {
  name: '',
  description: '',
  price: '',
  image: '',
  category: 'Electronics',
  stock: ''
};

const AddProduct = () => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      await createProduct({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock)
      });
      navigate('/admin/manage-products');
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Product could not be added.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        {error && <div className="alert alert-error">{error}</div>}

        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" className="form-control" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price (₹)</label>
          <input id="price" name="price" type="number" min="0" step="0.01" className="form-control" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input id="image" name="image" type="url" className="form-control" value={formData.image} onChange={handleChange} placeholder="https://example.com/product.jpg" required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" className="form-control" value={formData.category} onChange={handleChange}>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Books</option>
            <option>Home</option>
            <option>Sports</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock Quantity</label>
          <input id="stock" name="stock" type="number" min="0" className="form-control" value={formData.stock} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
