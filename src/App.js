import { useEffect, useState, lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import Header from './components/Header/Header'
import { getCurrentUser } from './redux/auth/auth-operation'
import { loginByGoogle } from './redux/auth/auth-action'
import Loader from './components/Loader/Loader'

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView.js'),
) /* webpackChunkName: "Home View" */

const FinanceView = lazy(() =>
  import('./views/FinanceView/FinanceView.js'),
) /* webpackChunkName: "Functional View" */

const ReportView = lazy(() =>
  import('./views/ReportView/ReportView.js'),
) /* webpackChunkName: "Report View" */

const NotFoundView = lazy(() =>
  import('./views/NotFoundView/NotFoundView.js'),
) /* webpackChunkName: "NotFound View" */

function App() {
  const [isLoad, setIsLoad] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    setIsLoad(true)
    if (!location.search) {
      dispatch(getCurrentUser())
      setIsLoad(false)
      return
    }
    const params = new URLSearchParams(location.search)
    const token = params.get('token')
    if (!token) {
      dispatch(getCurrentUser())
      setIsLoad(false)
      return
    }
    dispatch(loginByGoogle(token))
    dispatch(getCurrentUser())
    setIsLoad(false)
  }, [])

  return (
    <div className="App">
      {isLoad ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<PublicRoute component={HomeView} />} />
              <Route
                path="/income"
                element={<PrivateRoute component={FinanceView} />}
              />
              <Route
                path="/report"
                element={<PrivateRoute component={ReportView} />}
              />
              <Route
                path="*"
                element={
                  <PublicRoute component={NotFoundView} redirectTo="/" />
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  )
}

export default App
