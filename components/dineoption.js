import { dineoutRestaurants } from "../utils/DineData"
import DineCard from "./dinecard"
export default  function Dineoption(){
return (
    <div className="w-[80%] mx-auto mt-20 mb-20">
    <p className="text-3xl font-bold">Discover best restaurants on Dineout</p>
    <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 ">
       {
        dineoutRestaurants.map((RestData)=><DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>)
       }
    </div>

</div>
)
}