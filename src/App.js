import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { lazy, Suspense } from 'react'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import Header from './components/Header/Header'
import { getCurrentUser } from './redux/auth/auth-operation'

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView.js'),
) /* webpackChunkName: "Home View" */

const FinanceView = lazy(() =>
  import('./views/FinanceView/FinanceView.js'),
) /* webpackChunkName: "Functional View" */

const ReportView = lazy(() =>
  import('./views/ReportView/ReportView.js'),
) /* webpackChunkName: "Report View" */

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Suspense fallback={null}>
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
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
