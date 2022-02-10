import Budget from '../../components/Budget/Budget'
import Balance from '../../components/Balance/Balance'
import Summary from '../../components/Summary/Summary'


const FinanceView = () => {
  return (
    <div className='bg'>
      <section className="container">
        {/* новые компоненты добавлять внутрь этой секции */}
        <Balance />
        <Budget />
        <Summary />
      </section>
    </div>
  )
}

export default FinanceView
