import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedUser: {},
  doctors: [],
  address: {},
  countries: [],
  signedIn: false,
  reset: false,
};

const authSlice = createSlice({
  name: "signedUser",
  initialState: initialState,
  reducers: {
    setSignedUser: (state: any, action: any) => {
      state.signedUser = action.payload;
      state.signedIn = true;
    },
    setDoctorsDB: (state: any, action: any) => {
        state.doctors = action.payload;
    },

    signOutUser: (state: any, action: any) => {
      state.signedUser = action.payload;
      state.profile = {};
      state.address = {};
      state.signedIn = false;
    },
  },
});

export const { setSignedUser, signOutUser,setDoctorsDB } = authSlice.actions;
export default authSlice.reducer;
