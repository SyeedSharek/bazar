import React from "react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const fetchData = async (url, requestData = null) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: requestData,
      });
      setData(response?.data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const submitData = async (url, formData = null) => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response?.data?.status === true) {
        setData(response?.data);
        setIsLoading(false);
        toast.success(response?.data?.message);
        return response?.data;
      }
    } catch (error) {
      setIsLoading(false);
      setError(error?.response?.data);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  };
  const deleteData = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (data?.status === true) {
        toast.success(response?.data?.message);
        setData(response?.data);
        setIsLoading(false);
        setError(null);
      }
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { fetchData, deleteData, submitData, data, isLoading, error };
};

export default useFetch;
