import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  format: {
    classroom: false,
    online: false,
  },
  venue: {
    amsterdam: false,
    barcelona: false,
  },
  month: {
    january: false,
    february: false,
  },
  year: {
    2024: false,
    2025: false,
  },
  certificate: {
    PMI: false,
    CPD: false,
  },
  duration: {
    fiveDays: false,
    tenDays: false,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const { category, filter } = action.payload;
      state[category][filter] = !state[category][filter];
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const { toggleFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
