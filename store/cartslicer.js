import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count:0
  },
  reducers: {
    addItem: (state, action) => {
        state.items.push({ ...action.payload, quantity: 1 });
        state.count++;
    },
    incrementItem: (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        if (item) {
          item.quantity += 1;
        }
        state.count++;
    },
    decrementItem: (state, action) => {
        const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items=state.items.filter((item)=> item.id!=action.payload.id) // Remove item if quantity is 0
        }
        state.count--;
      }
    },
    clearCart:((state)=>{
      state.items=[];
    })
  },
});

export const { addItem, incrementItem, decrementItem ,clearCart} = cart.actions;
export default cart.reducer;

