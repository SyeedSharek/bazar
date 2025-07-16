import { useParams } from "react-router-dom";
import { useState } from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import PrimaryButton from "../../../components/ui/buttons/PrimaryButton";
const apiUrl = import.meta.env.VITE_BACKEND_API;
import { useFormik } from "formik";
import ErrorMessage from "../../../components/ErrorMessage";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [image, setImage] = useState("");
  return <div>EditCategory</div>;
};

export default EditCategory;
