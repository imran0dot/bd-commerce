import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TInitialState {
    category: string;
}

const initialState: TInitialState = {
    category: ''
};

const categoryFilterSlice = createSlice({
    name: 'categoryFilter', // Changed to reflect the purpose of the slice
    initialState,
    reducers: {
        filterCategory(state, action: PayloadAction<string>) { // Fixed the parameter name and type
            state.category = action.payload;
        },
        clearFilterCategory(state){
            state.category = ''
        }
    },
});

export const { filterCategory, clearFilterCategory } = categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;