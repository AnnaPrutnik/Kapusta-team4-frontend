import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Budget from '../../components/Budget/Budget'
import Balance from '../../components/Balance/Balance'
import Summary from '../../components/Summary/Summary'
import { getIsLoggedIn } from '../../redux/auth'
import { getBalance } from '../../redux/balance'

const FinanceView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('render')
    dispatch(getBalance())
  }, [])

  return (
    <>
      {isLoggedIn && (
        <div className="bg">
          <section className="container">
            {/* новые компоненты добавлять внутрь этой секции */}
            <Balance />
            <Budget />
            <Summary />
          </section>
        </div>
      )}
    </>
  )
}

export default FinanceView
