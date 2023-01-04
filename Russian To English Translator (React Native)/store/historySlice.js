import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        items: []
    },
    reducers: {
        addHistoryItems: (state, action) => {
            const {item} = action.payload;

            if (item) {
                state.items.push(item);
            }

            console.log(state.items)
        }
    }
});

export const { addHistoryItems } = historySlice.actions;
export default historySlice.reducer;