import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { signUpUser, loginUser, logoutUser, currentUser } from '../../services/'
import { setHeaders, unsetHeaders } from '../../services/'

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
      setHeaders(data.token)
      toast.success('Поздравляем! Вы успешно вошли в свою учетную запись!')
      return data
    } catch (error) {
      toast.error(
        'Ошибка! Проверьте правильность вводимых данных или зарегистрируйтесь для входа в личный кабинет!',
      )
      return rejectWithValue(error.message)
    }
  },
)

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      logoutUser()
      unsetHeaders()
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
