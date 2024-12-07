import { createSlice } from "@reduxjs/toolkit";
import NavLink from "../APIs/NavAPI";
import { HomePosterData } from "../APIs/HomeAPI";

const initialState = {
  path: "/",
  isActive: false,
  navlinkdata: NavLink,
  homeposterdata: HomePosterData,
};

const Slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPath(state, action) {
      state.path = action.payload;
    },
    toggleNav(state) {
      state.isActive = !state.isActive;
    },
    setAPIData(state, action) {
      state.navlinkdata = action.payload;
      state.homeposterdata = action.payload;
    },
  },
});

export const { setPath, setAPIData, toggleNav } = Slice.actions;
export default Slice.reducer;
