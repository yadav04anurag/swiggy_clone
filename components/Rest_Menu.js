import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import RestInfo from "./Rest_info";

export default function RestMenu({ menuitems, foodselected }) {
    console.log(menuitems);

    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        return (
            <div className="w-full bg-gray-50 p-6 rounded-3xl shadow-md border border-gray-200 flex justify-between items-center">
                <p className="text-3xl font-bold text-gray-800">{menuitems.title}</p>
                <button
                    className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <ChevronUp size={24} />
                </button>
            </div>
        );
    }

    if ("categories" in menuitems) {
        return menuitems.categories.map((val) => (
            <RestMenu key={val?.title} menuitems={val} foodselected={foodselected} />
        ));
    }

    return (
        <div className="w-full bg-gray-50 p-6 rounded-3xl shadow-md border border-gray-200">
            <div className="flex justify-between items-center">
                <p className="text-3xl font-bold text-gray-800">{menuitems.title}</p>
                <button
                    className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <ChevronDown size={24} />
                </button>
            </div>

            <div className="space-y-4 mt-4">
                {
                    foodselected === "veg"
                        ? menuitems?.itemCards?.filter((food) => "isVeg" in food?.card?.info).map((items) => (
                            <RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />
                        ))
                        : foodselected === "nonveg"
                        ? menuitems?.itemCards?.filter((food) => !("isVeg" in food?.card?.info)).map((items) => (
                            <RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />
                        ))
                        : menuitems?.itemCards?.map((items) => (
                            <RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />
                        ))
                }
            </div>
        </div>
    );
}
