import axios from "axios";
import { useState } from "react";

const useFormikSubmit = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, method = "GET", requestData = null) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");

    try {
      const response = await axios({
        url,
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: requestData,
      });
      setData(response?.data);
      setError(null);
      return response.data; // Return data for direct access in onSubmit
    } catch (error) {
      setError(error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, data, isLoading, error };
};

export default useFormikSubmit;
