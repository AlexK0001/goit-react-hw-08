import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
     user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    isError: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(register.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        .addCase(logIn.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        .addCase(logOut.fulfilled, (state) => {
          return initialState;
        })
        
        .addCase(refreshUser.pending, (state) => {
          state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, (state) => {
          state.isRefreshing = false;
        })
        .addMatcher(isAnyOf(register.pending, logIn.pending), state => {
          state.isLoading = true;
        })
          .addMatcher(isAnyOf(register.rejected, logIn.rejected), (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;});
    },
  });
  
  export default authSlice.reducer;

  // someuser3@mail.com