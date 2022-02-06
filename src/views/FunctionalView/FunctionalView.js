import ExpenseAndIncome from '../../components/ExpenseAndIncome/ExpenseAndIncome'
import GreyBg from '../../components/GreyBg/GreyBg'
import WhiteBg from '../../components/WhiteBg/WhiteBg'
import FunctionalBg from '../../components/FunctionalBg/FuntionalBg'

const FunctionalView = () => {
  return (
    <section>
      <GreyBg>
        <section className="container">
          <ExpenseAndIncome />
        </section>
      </GreyBg>
      <WhiteBg>
        <FunctionalBg/>
      </WhiteBg>
    </section>
  )
}

export default FunctionalView;
