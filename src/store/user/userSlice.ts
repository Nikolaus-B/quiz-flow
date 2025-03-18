import { UserState } from "@/models/User";
import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./userOperations";

const initialState: UserState = {
  reviews: [],
  progressBars: [],
  multiStepsData: {
    "emotional-attraction": [],
    "build-connection": [],
    default: [],
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.reviews = action.payload.reviews;
        state.progressBars = action.payload.progressBars;
        state.multiStepsData = action.payload.multiStepsData;
        state.loading = false;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// export const {} = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
