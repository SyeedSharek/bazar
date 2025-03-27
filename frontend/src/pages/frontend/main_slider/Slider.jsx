import React from "react";
import useSliderApi from "../../../api/slider/Slider_Api"; // Hook should start with "use"
import Loading from "../../../components/ui/Loading";

export default function Slider() {
  const { sliders, loading, error } = useSliderApi(); // Use custom hook properly

  return (
    <div className="h-[482.42px] m-5">
      {/* {loading && <Loading />} */}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && !error && sliders.length > 0 ? (
        sliders.map((slider, index) => (
          <img
            key={index}
            className=" w-[1032px] object-cover"
            src={slider.image} // Fixed image access
            alt={`Slider ${index}`}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No sliders available</p>
      )}
    </div>
  );
}
