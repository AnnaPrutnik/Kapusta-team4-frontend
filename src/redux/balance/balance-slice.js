import { createSlice } from '@reduxjs/toolkit'
import { getBalance, setBalance } from './balance-operation'
import { logIn, logOut } from '../auth/auth-operation'
import { updateBalance } from './balance-action'

const initialState = {
  value: null,
  error: false,
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducer: {},
  extraReducers: {
    [logIn.pending](state, _) {
      state.error = false
      state.value = null
    },
    [logIn.fulfilled](state, { payload }) {
      state.value = payload.balance
      state.error = false
    },
    [logIn.rejected](state, { payload }) {
      state.error = false
      state.value = null
    },
    [logOut.pending](state, _) {
      state.error = false
    },
    [logOut.fulfilled](state, _) {
      state.error = false
      state.value = null
    },
    [logOut.rejected](state, _) {
      state.error = true
    },
    [updateBalance](state, { payload }) {
      state.value = payload
    },
    [getBalance.pending](state, _) {
      state.error = false
    },
    [getBalance.fulfilled](state, { payload }) {
      state.value = payload
      state.error = false
    },
    [getBalance.rejected](state, _) {
      state.error = true
    },
    [setBalance.pending](state, _) {
      state.error = false
    },
    [setBalance.fulfilled](state, { payload }) {
      state.value = payload
      state.error = false
    },
    [setBalance.rejected](state, { payload }) {
      state.error = false
    },
  },
})

export default balanceSlice.reducer
