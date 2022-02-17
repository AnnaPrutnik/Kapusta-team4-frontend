import { useSelector } from 'react-redux'
import Finance from '../../components/FinanceView/Finance'
import { getIsLoggedIn } from '../../redux/auth'

const FinanceView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)

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
