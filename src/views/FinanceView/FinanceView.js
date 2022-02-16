import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Finance from '../../components/FinanceView/Finance'
import { getIsLoggedIn } from '../../redux/auth'
import { getBalance } from '../../redux/balance'

const FinanceView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBalance())
  }, [])

  return (
    <>
      {isLoggedIn && (
        <div className="bg">
          <section className="container">
            <Finance />
          </section>
        </div>
      )}
    </>
  )
}

export default FinanceView
