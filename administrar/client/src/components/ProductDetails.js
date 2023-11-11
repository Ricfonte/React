

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
   
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/api/products/${match.params.id}`)
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [match.params.id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>
      <p>Descripción: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
