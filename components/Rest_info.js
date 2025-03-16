import { useState } from "react";
import { addItem, incrementItem, decrementItem } from "../store/cartslicer"
import { useDispatch } from "react-redux";
export default function RestInfo({ restData }) {
  const [count, setCount] = useState(0);
  const dispatch=useDispatch();
  const handleAddItems = () => {
    setCount(1);
    dispatch(addItem(restData));
  };
  
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    dispatch(incrementItem(restData));
  };
  
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      dispatch(decrementItem(restData));
    } else {
      setCount(0); // Reset to 0 when removing last item
      dispatch(decrementItem(restData.id)); // Remove from cart
    }
  };
  
  return (
    <>
      <div className="flex w-full justify-between items-start p-4 bg-white rounded-3xl shadow-lg border border-gray-200 mb-4">
        {/* Left Section - Restaurant Details */}
        <div className="w-[70%] space-y-2">
          <p className="text-2xl text-gray-800 font-semibold">{restData?.name}</p>
          <p className="text-xl font-medium text-gray-600">
            {"₹" + ("defaultPrice" in restData ? restData?.defaultPrice / 100 : restData?.price / 100)}
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-green-700 font-semibold text-lg">
              {restData?.ratings?.aggregatedRating?.rating} ★
            </span>
            <span className="text-gray-500">
              ({restData?.ratings?.aggregatedRating?.ratingCountV2})
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-snug">{restData?.description}</p>
        </div>

        {/* Right Section - Image & Button */}
        <div className="w-[25%] relative">
          <img
            className="w-full h-36 object-cover rounded-2xl shadow-md border border-gray-200"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restData.imageId}
            alt="Dish"
          />

          {/* Button Container */}
          <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32">
            {count === 0 ? (
              <button
                onClick={() => handleAddItems()}
                className="w-full rounded-lg text-lg font-semibold text-green-600 px-4 py-1 shadow-md border border-green-600 bg-white hover:bg-green-600 hover:text-white transition"
              >
                ADD
              </button>
            ) : (
              <div className="flex justify-between items-center bg-white border border-gray-300 px-4 py-1 rounded-lg shadow-md">
                <button
                  onClick={() => handleDecrement()}
                  className="text-red-500 font-bold text-lg"
                >
                  −
                </button>
                <span className="text-lg font-semibold">{count}</span>
                <button
                  onClick={() => handleIncrement()}
                  className="text-green-500 font-bold text-lg"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="border-gray-300 my-4" />
    </>
  );
}
