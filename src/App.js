import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Router from './components/Router/Router'
import Loader from './components/Loader/Loader'
import { getCurrentUser, loginByGoogle, getToken } from './redux/auth/'

function App() {
  const [isLoad, setIsLoad] = useState(false)
  const curToken = useSelector(getToken)
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
