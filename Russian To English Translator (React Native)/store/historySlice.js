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

        },
        setHistoryItems: (state, action) => {
            state.items = action.payload.items;
        }
    }
});

export const { addHistoryItems, setHistoryItems } = historySlice.actions;
export default historySlice.reducer;