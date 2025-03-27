import axios from "axios";
import React, { useEffect, useState } from "react";
import Url from "../../url/Url";

export default function Category_Api() {
  const apiUrl = import.meta.env.VITE_BACKEND_API;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      // .get(`${apiUrl}/frontend/categories`)
      .get(`http://127.0.0.1:8000/api/frontend/categories`)
      .then((response) => {
        // console.log(response)
        setCategories(response.data.data);
        // console.log(response.data.data)
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [apiUrl]);

  return { categories, loading, error };
}
