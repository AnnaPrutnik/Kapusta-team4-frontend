import Budget from '../../components/Budget/Budget'
import Balance from '../../components/Balance/Balance'
import Summary from '../../components/Summary/Summary'

import { FunctionalBg } from '../../components/Background/'

const FinanceView = () => {
  return (
    <div className="bg">
      <section className="container">
        {/* новые компоненты добавлять внутрь этой секции */}
        <Balance />
        <Budget />
        <Summary />
      </section>
      <FunctionalBg />
    </div>
  )
}

export default FinanceView
