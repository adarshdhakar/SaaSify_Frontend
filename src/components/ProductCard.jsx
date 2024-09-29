// src/components/ProductCard.jsx

import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography color="text.secondary">
          Vendor: {product.vendor.name}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Price: ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Select for Auction
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
