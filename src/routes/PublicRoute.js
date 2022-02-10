import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { getIsLoggedIn } from '../redux/auth'

export default function PublicRoute({ component: Component }) {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const shouldRedirect = isLoggedIn

  return <>{shouldRedirect ? <Navigate to="/income" /> : <Component />}</>
}

// УДАЛИТЬ ПОСЛЕ ДОБАВЛЕНИЯ БЭКА

// export default function PublicRoute({
//   component: Component,
//   restricted = false,
// }) {
//   return  <Component />
// }
