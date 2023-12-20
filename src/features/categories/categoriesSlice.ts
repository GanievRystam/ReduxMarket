import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getCategories = createAsyncThunk("categories/getCategories", async (_, thunkAPI) => {
try {
    const res = await axios(`${BASE_URL}/categories`);
    return res.data
    } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
    }
);
const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
    },
    reducers: {
        // fill in primary logic here
    },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
        state.list = action.payload;
    })
  },
    
});

export default categoriesSlice.reducer;