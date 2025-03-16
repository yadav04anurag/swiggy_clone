import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { clearCart } from "../store/cartslicer"; // Redux action to clear cart

export default function Cart() {
    const cartData = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const [showThanks, setShowThanks] = useState(false);

    // Function to extract the correct price
    function getPrice(item) {
        return "defaultPrice" in item ? item.defaultPrice / 100 : item.price / 100;
    }

    // Generate discounts dynamically & consider quantity
    const cartWithDiscounts = cartData.map((item) => {
        const basePrice = getPrice(item) || 0;
        const discountPercentage = Math.floor(Math.random() * 21); // Random discount (0-20%)
        const discountAmount = (basePrice * discountPercentage) / 100;
        const finalPrice = basePrice - discountAmount;

        return {
            ...item,
            discountPercentage,
            discountAmount,
            finalPrice,
            totalFinalPrice: finalPrice * item.quantity,
            totalDefaultPrice: basePrice * item.quantity
        };
    });

    const totalDefaultPrice = cartWithDiscounts.reduce((total, item) => total + item.totalDefaultPrice, 0);
    const totalFinalPrice = cartWithDiscounts.reduce((total, item) => total + item.totalFinalPrice, 0);
    const totalDiscount = (totalDefaultPrice - totalFinalPrice).toFixed(2);
    const totalDiscountPercentage = ((totalDiscount / totalDefaultPrice) * 100).toFixed(2);

    const handleCheckout = () => {
        setShowThanks(true);
        dispatch(clearCart()); // Clear cart in Redux
        setTimeout(() => setShowThanks(false), 3000); // Hide animation after 3s
    };
    if(cartData.length==0){
        return(
            <>
                <div className="flex flex-col items-center justify-center h-[80vh]">
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816556-4004143.png"
                    alt="Empty Cart"
                    className="w-60 h-60"
                />
                <h2 className="text-2xl font-semibold text-gray-700 mt-4">Your Cart is Empty</h2>
                <p className="text-gray-500">Looks like you haven’t added anything to your cart yet.</p>
                <a
                    href="/"
                    className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                    Browse Restaurants
                </a>
            </div>
            </>
        )
    }
    return (
        <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3">
            <h1 className="text-center text-orange-600 text-2xl font-bold">Your Cart</h1>

            <div className="divide-y divide-gray-200">
                {cartWithDiscounts.map(item => (
                    <div key={item.id} className="flex items-center justify-between py-4">
                        <img
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item.imageId}
                            alt={item.name}
                            className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1 ml-4">
                            <div className="text-lg font-semibold">{item.name}</div>
                            <div className="text-gray-500 text-sm">{item.category}</div>
                            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                            <p className="text-gray-800 text-sm font-medium">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-gray-500 line-through text-sm">₹{item.totalDefaultPrice.toFixed(2)}</div>
                            <div className="text-lg font-bold text-green-600">₹{item.totalFinalPrice.toFixed(2)}</div>
                            <div className="text-sm text-red-500">-{item.discountPercentage}%</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-right">
                <div className="text-gray-500 text-sm">Total MRP: ₹{totalDefaultPrice.toFixed(2)}</div>
                <div className="text-red-500 text-sm">Discount: -₹{totalDiscount} ({totalDiscountPercentage}%)</div>
                <div className="text-xl font-bold">Total Payable: ₹{totalFinalPrice.toFixed(2)}</div>
            </div>

            <button 
                onClick={handleCheckout} 
                className="w-full bg-orange-600 text-white py-3 text-lg rounded mt-4 hover:bg-orange-700 transition"
            >
                Proceed to Checkout
            </button>

        </div>
    );
}
