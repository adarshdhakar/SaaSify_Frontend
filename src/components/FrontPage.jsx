// src/components/FrontPage.jsx

import React, { useState, useEffect } from 'react';
import { Container, Grid2, Typography, Button } from '@mui/material';
import ProductCard from './ProductCard';
import axios from 'axios';

const FrontPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch SaaS products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://saasify-backend.onrender.com/api/vendors/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to SaaSify Marketplace
      </Typography>
      <Typography variant="subtitle1" component="p">
        Select from the best SaaS products at competitive prices
      </Typography>

      <Grid2 container spacing={3} style={{ marginTop: '2rem' }}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid2 item xs={12} sm={6} md={4} key={product.productId}>
              <ProductCard product={product} />
            </Grid2>
          ))
        ) : (
          <Typography variant="h6">No products available</Typography>
        )}
      </Grid2>
    </Container>
  );
};

export default FrontPage;
