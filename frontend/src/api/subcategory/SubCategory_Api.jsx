// SubCategory_Api.jsx
import axios from "axios";
import { useEffect, useState } from "react";

export default function SubCategory_Api(category_id) {
  const apiUrl = import.meta.env.VITE_BACKEND_API;
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category_id) return;

    setLoading(true);
    axios
      .get(`${apiUrl}/frontend/categoryWish/subcategory/${category_id}`)
      .then((response) => {
        setSubCategories(response.data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [category_id]);

  return { subCategories, loading, error };
}
