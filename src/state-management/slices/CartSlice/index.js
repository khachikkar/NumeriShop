import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: JSON.parse(localStorage.getItem("cart")) || [] // Load from localStorage
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find(item => item.productId === product.productId);

            if (!existingProduct) {
                // Add product with initial count
                state.cart.push({ ...product, count: 1 });
            } else {
                // Increment count for existing product
                existingProduct.count++;
            }

            // Save to localStorage
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            // Remove the product by its ID
            state.cart = state.cart.filter(item => item.productId !== productId);

            // Save updated cart to localStorage
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
