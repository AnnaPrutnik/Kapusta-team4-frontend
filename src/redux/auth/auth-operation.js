import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { signUpUser, loginUser, logoutUser, currentUser } from '../../services/'
import { setHeaders } from '../../services/'
import { setBalance } from '../../services/userApi/userApi'

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
      toast.success("Поздравляем! Вы успешно вошли в свою учетную запись!")
      return data
    } catch (error) {
      toast.error("Ошибка! Проверьте правильность вводимых данных или зарегистрируйтесь для входа в личный кабинет!")
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

export const balanceSet = createAsyncThunk(
  '/user/balance',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await setBalance(credentials)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)
