import { useSelector } from 'react-redux'
import Budget from '../../components/Budget/Budget'
import Balance from '../../components/Balance/Balance'
import Summary from '../../components/Summary/Summary'
import { getIsLoggedIn } from '../../redux/auth'

const FinanceView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
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
