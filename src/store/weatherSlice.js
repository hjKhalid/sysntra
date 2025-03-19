import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  weather: null,
  status: "idle",
  error: null,
};

export const currentWeather = createAsyncThunk(
  "weather/currentWeather",
  async (currentCity, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(currentWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(currentWeather.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.weather = action.payload;
        console.log(action.payload);
      })
      .addCase(currentWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
