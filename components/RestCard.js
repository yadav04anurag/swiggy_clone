import { Link } from "react-router";

export default function RestCard({ restInfo }) {
    return (
      <Link to={"/city/delhi/"+restInfo?.info?.id}>
      <div className="border border-gray-300 shadow-lg rounded-lg  h-100 w-80 bg-white p-4 hover:shadow-xl transition-all hover:scale-105  duration-300">
        {/* Image */}
        <img
          className="w-full h-48  bg-center rounded-md"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${restInfo.info.cloudinaryImageId}`}
          alt={restInfo.info.name}
        />
  
        {/* Card Content */}
        <div className="mt-3">
          {/* Name & Rating */}
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg text-gray-800 truncate">{restInfo.info.name}</h2>
            <p className="text-sm font-medium flex items-center text-gray-700 bg-yellow-100 px-2 py-1 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="none"
                className="w-4 h-4 text-yellow-500 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2l2.92 6.26 6.87.99-5 4.86 1.18 6.85L12 17.77l-6.17 3.19 1.18-6.85-5-4.86 6.87-.99L12 2z"
                />
              </svg>
              {restInfo.info.avgRating}
            </p>
          </div>
  
          {/* Location & Cost */}
          <div className="flex justify-between text-gray-600 text-sm mt-1">
            <p className="truncate">{restInfo.info.areaName}, {restInfo.info.locality}</p>
            <p className="font-medium">{restInfo.info.costForTwo}</p>
          </div>
  
          {/* Cuisine Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {restInfo.info.cuisines.map((val) => (
              <span key={val} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {val}
              </span>
            ))}
          </div>
        </div>
      </div>
      </Link>
    );
  }
  