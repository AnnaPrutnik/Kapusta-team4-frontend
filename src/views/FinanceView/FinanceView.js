import ExpenseAndIncome from '../../components/ExpenseAndIncome/ExpenseAndIncome'
import Balance from '../../components/Balance/Balance'
import { GreyBg } from '../../components/Background/'
import { WhiteBg } from '../../components/Background/'
import { FunctionalBg } from '../../components/Background/'

const FinanceView = () => {
  return (
    <section>
      <GreyBg>
        <section className="container">
          <Balance />
          <ExpenseAndIncome />
        </section>
      </GreyBg>
      <WhiteBg>
        <FunctionalBg />
      </WhiteBg>
    </section>
  )
}

export default FinanceView
