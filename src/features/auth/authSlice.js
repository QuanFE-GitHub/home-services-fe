import { createSlice } from '@reduxjs/toolkit';
import { LocalStorage } from 'src/utils/enum';

/**
 * accessToken<string>: token
 * userProfile<object>: information of current user
 * loading<boolean>: set loading call api
 * status
 * message<string>: notification user dispatch action
 */
const initialState = {
  accessToken: localStorage.getItem(LocalStorage.ACCESS_TOKEN) || null,
  userProfile: localStorage.getItem(LocalStorage.USER_PROFILE) || null,
  loading: false,
  status: null,
  message: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Reset Status
    resetStatus(state) {
      state.status = null;
      state.message = null;
    },

    // Login
    login(state) {
      state.loading = true;
    },

    // Login Success
    loginSuccess(state, action) {
      state.loading = false;
      state.accessToken = action.payload.token;
      state.userProfile = action.payload.user;
    },

    // Login Failed
    loginFailed(state, action) {
      state.loading = false;
      state.status = false;
      state.message = action.payload;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selector
export const selectAuthToken = (state) => state.auth.accessToken;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthUserProfile = (state) => state.auth.userProfile;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthMessage = (state) => state.auth.message;
