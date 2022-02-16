import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Router from './components/Router/Router'
import Loader from './components/Loader/Loader'
import { getCurrentUser } from './redux/auth/auth-operation'
import { loginByGoogle } from './redux/auth/auth-action'

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
          <div className="grey"></div>
          <Header />
          <Router />
        </>
      )}
    </div>
  )
}

export default App
