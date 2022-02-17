export const getIsLoggedIn = state => state.auth.isLoggedIn
export const getUsername = state => state.auth.user.name
export const getUserEmail = state => state.auth.user.email
export const getIsFirstLogin = state => state.auth.isFirstLogin
export const getIsRefreshing = state => state.auth.isRefreshing
export const getToken = state => state.auth.token
