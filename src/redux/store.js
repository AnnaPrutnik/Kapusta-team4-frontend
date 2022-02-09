import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import authReducer from '../redux/auth/auth-slice'

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // transactions: будут транзакции....
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)

export { store, persistor }
