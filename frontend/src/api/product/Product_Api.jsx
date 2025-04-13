import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Product_Api() {
    const apiUrl = import.meta.env.VITE_BACKEND_API;
    const [product,setLatestProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
      setLoading(true);
      axios
        .get(`${apiUrl}/frontend/all/products`)
        .then((response) => {        
          setLatestProduct(response.data.data.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);

  return {product,loading,error}
}
