import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'
import Balance from './BalanceBar/Balance'
import AddTransaction from './Main/AddTransaction/AddTransaction'
import InfoTable from './Main/Tables/InfoTable'
import Calendar from './Main/Calendar/Calendar'
import Buttons from './Main/Buttons/Buttons'
import MobileForm from './Main/AddTransaction/MobileForm'
import Summary from './Summary/Summary'
import { getTransactionsForOneDay, deleteTransaction } from '../../services'
import { updateBalance } from '../../redux/balance'
import s from './Finance.module.scss'

function Finance() {
  const [isExpense, setIsExpense] = useState(true)
  const [transactions, setTransactions] = useState([])
  const [date, setDate] = useState(dayjs().format())
  const [showForm, setShowForm] = useState(false)
  const notMobile = useMediaQuery({ minWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 1280 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279.98 })
  const dispatch = useDispatch()

  useEffect(() => {
    getTransactionsForOneDay(date).then(res => {
      setTransactions(res.data)
    })
  }, [date])

  const handleShowForm = value => {
    setShowForm(value)
  }

  const handleChangeDate = value => {
    setDate(value)
  }

  const handleAddTransactions = transaction => {
    setTransactions(prev => [transaction, ...prev])
  }

  const handleDeleteTransaction = async id => {
    const { data } = await deleteTransaction(id)
    if (!data) {
      toast.error('К сожалению, транзакция не была удалена!', {
        position: toast.POSITION.TOP_LEFT,
      })
      return
    }
    await setTransactions(prev =>
      prev.filter(transaction => transaction._id !== id),
    )
    dispatch(updateBalance(data.newBalance))
    toast.success('Транзакция удалена!', {
      position: toast.POSITION.TOP_LEFT,
    })
  }

  const handleChangeIsExpense = value => {
    setIsExpense(value)
  }

  const convertTransaction = transactions.map(item => {
    const convertDate = dayjs(item.transactionDate).format('DD.MM.YYYY')
    return { ...item, convertDate }
  })

  return (
    <div className={s.section}>
      {showForm ? (
        <MobileForm
          onClick={handleShowForm}
          date={date}
          changeTransactions={handleAddTransactions}
          isExpense={isExpense}
        />
      ) : (
        <>
          <Balance />
          <Buttons
            isExpense={isExpense}
            changeExpense={handleChangeIsExpense}
            notMobile={notMobile}
            isShowForm={handleShowForm}
          />
          <div className={s.transaction}>
            <div className={s.wrap}>
              <Calendar changeDate={handleChangeDate} />
              {notMobile && (
                <AddTransaction
                  date={date}
                  changeTransactions={handleAddTransactions}
                  isExpense={isExpense}
                  onCloseForm={handleShowForm}
                />
              )}
            </div>
            <div className={s.stats}>
              <InfoTable
                transactions={convertTransaction}
                deleteTransaction={handleDeleteTransaction}
                isExpense={isExpense}
              />
              {isDesktop && (
                <Summary isExpense={isExpense} length={transactions.length} />
              )}
            </div>
          </div>
          {isTablet && (
            <Summary isExpense={isExpense} length={transactions.length} />
          )}
        </>
      )}
    </div>
  )
}

export default Finance
