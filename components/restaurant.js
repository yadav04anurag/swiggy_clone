import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./shimmer";

export default function Restaurant(){
   
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8504593&lng=75.76277019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(proxyServer+swiggyAPI);
        console.log("waiting")
        const data = await response.json();
        setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     fetchData();
    },[])

    console.log("this is the restraunt data ",RestData);
    if(RestData?.length==0){
        return (
            <Shimmer></Shimmer>
        )
    }
    return (
        <>
        <p className="text-3xl font-bold px-5 mt-5">Restraunts Near Me :</p>
        <div className="flex flex-wrap justify-center items-center mx-auto mt-5 mb-10 gap-5 ">
            
            {
                RestData?.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
            }

        </div>
        </>
    )

}