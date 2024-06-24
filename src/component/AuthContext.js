import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://dummyjson.com/products');
      if (response.status === 200) {
        setProducts(response.data.products);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products/category-list');
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${category}`);
      const data = await response.json();
      setCategoryProducts(data.products);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const searchProducts = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
      if (response.status === 200) {
        setProducts(response.data.products);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        products,
        categories,
        categoryProducts,
        loading,
        error,
        fetchProducts,
        searchProducts,
        fetchProductsByCategory,
        cart,
        addToCart,
        fetchCategories
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
