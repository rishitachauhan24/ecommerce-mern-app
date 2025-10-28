import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../../services/productService';
import ProductCard from '../../components/ProductCard';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter(product => product._id !== id));
  };

  return (
    <div className="manage-products">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <Link to="/admin/add-product" className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Add New Product
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <ProductCard product={product} />
            <button onClick={() => handleDelete(product._id)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;