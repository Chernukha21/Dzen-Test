import { createSlice } from '@reduxjs/toolkit'
import {orders, products} from "../../components/orders";

const initialState = {
    value: orders,
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        removeOrder: (state,action) => {
            state.value = state.value.filter(el => el.id !== action.payload);
        },
        removeProduct: (state,action) => {
            const {productIdToDelete, orderId} = action.payload;
            console.log('1111', action.payload);
            state.value = state.value.map(el => {
                if(el.id === orderId){
                    el.products = el.products.filter((product,i) => i === productIdToDelete)
                }
                return el;
            })
        },
        addProduct: (state, action) => {
            state.value = state.value.map(el => {
                if(el.id === action.payload){
                    el.products.push(products[0]);
                }
                return el;
            })
        }
    }
})

// Action creators are generated for each case reducer function
export const { removeOrder, addProduct, removeProduct } = ordersSlice.actions;

export default ordersSlice.reducer;