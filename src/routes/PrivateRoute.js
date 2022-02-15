import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { getIsLoggedIn } from '../redux/auth/auth-selectors'

function PrivateRoute({ component: Component }) {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return <>{isLoggedIn ? <Component /> : <Navigate to="/" />}</>
}

export default PrivateRoute

// УДАЛИТЬ ПОСЛЕ ДОБАВЛЕНИЯ БЭКА

// const PrivateRoute = ({ component: Component }) => {
//   return  <Component />
// }

// export default PrivateRoute
