// РАСКОММЕНТИРОВАТЬ ПОСЛЕ ДОБАВЛЕНИЯ БЭКА

// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router';
// import authSelectors from '../redux/auth/auth-selectors';

// export default function PublicRoute({
//   component: Component,
//   restricted = false,
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
//   return <>{shouldRedirect ? <Navigate to="/income" /> : <Component />}</>;
// }


// УДАЛИТЬ ПОСЛЕ ДОБАВЛЕНИЯ БЭКА

export default function PublicRoute({
  component: Component,
  restricted = false,
}) {
  return  <Component />
}
