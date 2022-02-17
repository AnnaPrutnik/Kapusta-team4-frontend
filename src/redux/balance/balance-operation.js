import { createAsyncThunk } from '@reduxjs/toolkit'
import { setUserBalance } from '../../services/'

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
