import { useParams } from "react-router";
import { useState, useEffect } from "react";
import RestMenu from "./Rest_Menu";
import { Link } from "react-router";
export default function RestaurantMenu() {
    let { id } = useParams();
    const [selected, setSelected] = useState(null);
    const [RestData, setRestData] = useState([]); // Full menu data
    const [filteredMenu, setFilteredMenu] = useState([]); // Filtered menu data

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

            try {
                const response = await fetch(proxyServer + swiggyAPI);
                const data = await response.json();
                const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
                const filterData = tempData.filter((items) => "title" in items?.card?.card);

                console.log("Fetched Data:", filterData); // Debugging

                setRestData(filterData);
                setFilteredMenu(filterData); // Initialize filtered menu with full data
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        }

        fetchData();
    }, [id]);

    // Apply filtering based on `selected` value
    useEffect(() => {
        if (!RestData.length) return;

        let filteredData = RestData.filter((category) =>
            category?.card?.card?.itemCards?.some((item) => {
                const isVeg = item?.card?.info?.isVeg; // Check for `isVeg` key
                return selected === "veg" ? isVeg === 1 : selected === "nonveg" ? isVeg !== 1 : true;
            })
        );

        console.log("Filtered Data:", filteredData); // Debugging

        setFilteredMenu(filteredData);
    }, [selected, RestData]);

    return (
        <>
            <div className="w-[80%] mx-auto mt-5 mb-5 flex justify-evenly items-center">
                {/* Search Bar Section */}
                <div className="w-full mx-auto mt-10 mb-10 flex justify-center">
                    <Link to={`/city/delhi/${id}/search`}>
                        <p className="w-full text-center py-4 px-6 rounded-xl bg-gray-100 text-2xl font-semibold hover:bg-gray-200 transition duration-300 shadow-md cursor-pointer">
                            Search for Dishes
                        </p>
                    </Link>
                </div>

                {/* Filter Buttons Section */}
                <div className="flex justify-center gap-6 mt-6 w-2xl">
                    <button
                        className={`text-2xl py-3 px-8 border rounded-xl transition-all duration-300 shadow-md font-medium tracking-wide ${selected === "veg"
                                ? "bg-green-600 text-white scale-105 shadow-lg"
                                : "bg-green-100 text-green-800 hover:bg-green-200"
                            }`}
                        onClick={() => setSelected(selected === "veg" ? null : "veg")}
                    >
                        Veg
                    </button>

                    <button
                        className={`text-2xl py-3 px-8 border rounded-xl transition-all duration-300 shadow-md font-medium tracking-wide ${selected === "nonveg"
                                ? "bg-red-600 text-white scale-105 shadow-lg"
                                : "bg-red-100 text-red-800 hover:bg-red-200"
                            }`}
                        onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
                    >
                        Non-Veg
                    </button>
                </div>
            </div>

            {/* Menu Cards Section */}
            <div className="w-[80%] mx-auto mt-1">
                {filteredMenu?.map((menuitems) => (
                    <RestMenu key={menuitems?.card?.card?.title} menuitems={menuitems?.card?.card} foodselected={selected} />
                ))}
            </div>
        </>

    );
}
