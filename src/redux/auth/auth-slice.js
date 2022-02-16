import { createSlice } from '@reduxjs/toolkit'
import { loginByGoogle, changeIsFirstLogin } from './auth-action'

import {
  register,
  logIn,
  logOut,
  getCurrentUser,
  editName,
  editAvatar,
} from './auth-operation'

const initialState = {
  user: { name: null, email: null, avatar: null },
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
    [changeIsFirstLogin](state, _) {
      state.isFirstLogin = false
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
    [editName.pending](state, _) {
      state.error = null
    },
    [editName.fulfilled](state, { payload }) {
      state.user = { name: payload.name, email: payload.email }
    },
    [editName.rejected](state, { payload }) {
      state.error = payload
    },
    [editAvatar.pending](state, _) {
      state.error = null
    },
    [editAvatar.fulfilled](state, { payload }) {
      console.log(payload)
      state.user.avatar = payload
    },
    [editAvatar.rejected](state, { payload }) {
      state.error = payload
    },
  },
})

export default authSlice.reducer
