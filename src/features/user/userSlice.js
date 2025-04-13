import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  username: "",
  email: "",
  password: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
