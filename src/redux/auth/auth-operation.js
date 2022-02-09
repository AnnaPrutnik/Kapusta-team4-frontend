import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  signUpUser,
  loginUser,
  logoutUser,
} from '../../services/authApi/authApi'

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUpUser(credentials)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await loginUser(credentials)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      logoutUser()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

// На бекенде нет реализованого такого энд-поинта

// export const getCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState()
//     const persistedToken = state.auth.token
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue()
//     }
//     token.set(persistedToken)
//     try {
//       const { data } = await axios.get('/users/current')
//       return data
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message)
//     }
//   },
// )
