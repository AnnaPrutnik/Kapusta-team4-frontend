import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import {
  signUpUser,
  loginUser,
  logoutUser,
  currentUser,
  setUserName,
  setUserAvatar,
} from '../../services/'
import { setHeaders } from '../../services/'

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

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue()
    }
    setHeaders(persistedToken)
    try {
      const { data } = await currentUser()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const editName = createAsyncThunk(
  'auth/editName',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await setUserName(value)
      toast('Вы успешно изменили имя пользователя!')
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const editAvatar = createAsyncThunk(
  'auth/editAvatar',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await setUserAvatar(value)
      toast('Вы успешно изменили фото профиля!')
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)
