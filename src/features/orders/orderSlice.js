import { createSlice } from '@reduxjs/toolkit'
import {orders} from "../../components/orders";

const initialState = {
    value: orders,
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        removeOrder: (state,action) => {
            state.value = state.value.filter(el => el.id !== action.payload);
        }
    }
})

// Action creators are generated for each case reducer function
export const { removeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;