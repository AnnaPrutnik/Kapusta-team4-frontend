import { createSlice } from '@reduxjs/toolkit'
import { loginByGoogle } from './auth-action'

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
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {},
  extraReducers: {
    [loginByGoogle](state, { payload }) {
      state.token = payload
    },
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
      state.isFirstLogin = payload.isFirstLogin
    },
    [getCurrentUser.rejected](state, { payload }) {
      state.error = payload
      state.isLoggedIn = false
    },
  },
})

export default authSlice.reducer
