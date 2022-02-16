import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from '../../routes/PrivateRoute'
import PublicRoute from '../../routes/PublicRoute'

import Loader from '../Loader/Loader'

const HomeView = lazy(() =>
  import('../../views/HomeView/HomeView.js'),
) /* webpackChunkName: "Home View" */

const FinanceView = lazy(() =>
  import('../../views/FinanceView/FinanceView.js'),
) /* webpackChunkName: "Functional View" */

const ReportView = lazy(() =>
  import('../../views/ReportView/ReportView.js'),
) /* webpackChunkName: "Report View" */

const NotFoundView = lazy(() =>
  import('../../views/NotFoundView/NotFoundView.js'),
) /* webpackChunkName: "NotFound View" */

function Router() {
  return (
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
          element={<PublicRoute component={NotFoundView} redirectTo="/" />}
        />
      </Routes>
    </Suspense>
  )
}

export default Router
