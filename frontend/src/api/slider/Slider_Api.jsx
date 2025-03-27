import { useEffect, useState } from "react";
import axios from "axios";

export default function useSliderApi() { // Renamed to "useSliderApi"
  const [sliders, setSliders] = useState([]); // Fixed "setSlider" -> "setSliders"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/frontend/sliders")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (response.data && response.data.data) {
          setSliders(response.data.data); // Ensure it's an array
        } else {
          setSliders([]); // Default to an empty array if no data
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching sliders:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []); // Added dependency array

  return { sliders, loading, error };
}
