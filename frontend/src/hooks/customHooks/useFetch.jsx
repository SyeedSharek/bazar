import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, method = "GET", requestData = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: requestData,
        });
        setData(response);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, requestData, token]);

  return { data, isLoading, error };
};

export default useFetch;
