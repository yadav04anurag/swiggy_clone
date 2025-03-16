import React from "react"
import ReactDOM from "react-dom/client"
import Restaurant from "./components/restaurant";
import Home from "./home";
import { BrowserRouter, Route, Routes } from "react-router";
import Restraunt_Menu from "./components/Resttaurant_Menu";
import SearchFood from "./components/SearchFood";
import Secondary_header from "./components/secondary_header";
import { Provider } from "react-redux";
import store from "../src/store/store"; // Import the store
import Cart from "./components/cart";
function App() {

    return (
        <>

            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route element={<Secondary_header></Secondary_header>}>
                            <Route path="/restaurants" element={<Restaurant></Restaurant>}></Route>
                            <Route path={"/city/delhi/:id"} element={<Restraunt_Menu></Restraunt_Menu>}></Route>
                            <Route path={"/city/delhi/:id/search"} element={<SearchFood></SearchFood>}></Route>
                        </Route>
                        <Route path="/cart" element={<Cart></Cart>}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>

        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);