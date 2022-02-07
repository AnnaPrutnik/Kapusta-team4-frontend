import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'


const HomeView = lazy(() =>
  import('./views/HomeView/HomeView.js'),
) /* webpackChunkName: "Home View" */

const FunctionalView = lazy(() =>
  import('./views/FunctionalView/FunctionalView.js'),
) /* webpackChunkName: "Functional View" */

const ReportView = lazy(() =>
  import('./views/ReportView/ReportView.js'),
) /* webpackChunkName: "Report View" */

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<PublicRoute component={HomeView} />} />
            <Route
              path="/income"
              element={<PrivateRoute component={FunctionalView} />}
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

export default App;
