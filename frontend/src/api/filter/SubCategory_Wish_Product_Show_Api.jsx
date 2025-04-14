import axios from 'axios';
import { useEffect, useState } from 'react';

export default function SubCategory_Wish_Product_Show_Api(subcategory_id) {
  const apiUrl = import.meta.env.VITE_BACKEND_API;
  const [subCategorieWishProduct, setsubCategorieWishProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!subcategory_id) return;

    setLoading(true);
    axios
      .get(`${apiUrl}/frontend/subcategoryWish/products/${subcategory_id}`)
      .then((response) => {

        // console.log(response.data.data.data);
        setsubCategorieWishProduct(response.data.data.data || []);

        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [subcategory_id]);

  return { subCategorieWishProduct, loading, error };
}
