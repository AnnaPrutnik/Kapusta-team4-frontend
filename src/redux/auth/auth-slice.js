import { createSlice } from '@reduxjs/toolkit'

import {
  register,
  logIn,
  logOut,
  balanceSet,
  balanceGet,
  getCurrentUser,
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

    [getCurrentUser.pending](state, _) {
      state.error = null
      state.isLoggedIn = false
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = { name: payload.name, email: payload.email }
      state.isLoggedIn = true
      // state.balance = payload.balance
      // state.isFirstLogin = false
    },
    [getCurrentUser.rejected](state, { payload }) {
      state.error = payload
      state.isLoggedIn = false
    },

    [balanceSet.fulfilled](state, { payload }) {
      state.balance = payload
    },
    [balanceSet.rejected](state, { payload }) {
      state.error = payload
    },
  },
})

export default authSlice.reducer
