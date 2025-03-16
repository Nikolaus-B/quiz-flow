import { UserState } from "@/models/User";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  goalId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {},
});

// export const {} = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
