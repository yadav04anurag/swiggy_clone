import Header from "./components/header";
import Foodoption from "./components/food_option";
import GroceryOption from "./components/GroceryOption";
import Dineoption from "./components/dineoption";
export default function Home(){
    return (
        <>
            <Header></Header>
            <Foodoption></Foodoption>
            <GroceryOption></GroceryOption>
            <Dineoption></Dineoption>
        </>
    )
}