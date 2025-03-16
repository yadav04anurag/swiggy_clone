import { GrocerGridCard } from "../utils/Grocery";
import Grocerycard from "./Grocerycard";

export default function GroceryOption() {
  return (
    <>
     <h1 className="font-serif text-3xl font-bold px-[10%] mt-20 ">
        Shop Groceries on Instamart
      </h1>
    <div className="mt-5 w-[80%] container mx-auto mb-5 px-2">
      <div className="w-[100%] container mx-auto flex mt-20  gap-5 overflow-x-auto whitespace-nowrap flex-nowrap">
    {GrocerGridCard.map((foodData) => (
        <div className="shrink-0  mb-5">
            <Grocerycard key={foodData.id} foodData={foodData} />
        </div>
    ))}
</div>

    </div>
    </>
  );
}
