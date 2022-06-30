import { createSlice } from '@reduxjs/toolkit';

export const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    services: [],
    isLoading: false,
  },
  reducers: {
    getServicesFetch: (state) => {
      state.isLoading = true;
    },
    getServicesSuccess: (state, action) => {
      state.services = action.payload;
      state.isLoading = false;
    },
    getServicesFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getServicesFetch, getServicesSuccess, getServicesFailure } = serviceSlice.actions;
export default serviceSlice.reducer;
