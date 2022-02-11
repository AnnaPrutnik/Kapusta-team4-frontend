import { createSlice } from '@reduxjs/toolkit'
import {
  register,
  logIn,
  logOut,
  balanceSet,
  balanceGet,
} from './auth-operation'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFirstLogin: true,
  balance: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, _) {
      state.error = null
      state.token = null
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.data
      state.token = null
      state.isLoggedIn = false
    },

    [register.rejected](state, { payload }) {
      state.error = payload
      state.isLoggedIn = false
    },
    [logIn.pending](state, _) {
      state.error = null
      state.token = null
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = { name: payload.name, email: payload.email }
      state.token = payload.token
      state.isLoggedIn = true
      state.balance = payload.balance
      state.isFirstLogin = payload.isFirstLogin
    },
    [logIn.rejected](state, { payload }) {
      state.error = payload
      state.isLoggedIn = false
    },
    [logOut.pending](state, _) {
      state.error = null
    },
    [logOut.fulfilled](state, _) {
      state.user = { name: null, email: null }
      state.token = null
      state.isLoggedIn = false
      state.balance = null
    },
    [logOut.rejected](state, { payload }) {
      state.error = payload
      state.isLoggedIn = false
    },
    [balanceSet.fulfilled](state, { payload }) {
      state.balance = payload
    },
    [balanceSet.rejected](state, { payload }) {
      state.error = payload
    },
    [balanceGet.fulfilled](state, { payload }) {
      state.balance = payload
    },
    [balanceGet.rejected](state, { payload }) {
      state.error = payload
    },
    // [getCurrentUser.pending](state, _) {
    //   state.isRefreshing = true
    //   state.error = null
    // },
    // [getCurrentUser.fulfilled](state, { payload }) {
    //   state.user = payload
    //   state.isLoggedIn = true
    //   state.isRefreshing = false
    // },
    // [getCurrentUser.rejected](state, { payload }) {
    //   state.error = payload
    //   state.isRefreshing = false
    // },
  },
})

export default authSlice.reducer
