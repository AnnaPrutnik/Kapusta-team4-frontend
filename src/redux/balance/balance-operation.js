import { createAsyncThunk } from '@reduxjs/toolkit'
import { setUserBalance, getUserBalance } from '../../services/'

export const getBalance = createAsyncThunk(
  '/balance/getBalance',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getUserBalance()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const setBalance = createAsyncThunk(
  '/balance/setBalance',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await setUserBalance(value)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)
