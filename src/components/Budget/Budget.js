import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { toast } from 'react-toastify'
import AddTransaction from './AddTransaction/AddTransaction'
import Balance from '../Balance/Balance'
import InfoTable from './InfoTable/InfoTable'
import TableMobile from './TableMobile/TableMobile'
import Calendar from './Calendar/Calendar'
import Buttons from './Buttons/Buttons'
import MobileForm from './MobileForm/MobileForm'
import Summary from '../Summary/Summary'
import { getTransactionsForOneDay, deleteTransaction } from '../../services'
import { updateBalance } from '../../redux/balance'
import s from './Budget.module.scss'

const Budget = () => {
  const [isExpense, setIsExpense] = useState(true)
  const [transactions, setTransactions] = useState([])
  const [date, setDate] = useState(new Date().toDateString())
  const [showForm, setShowForm] = useState(false)
  const notMobile = useMediaQuery({ minWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 1280 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279.99 })
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
    setTransactions(prev => [...prev, transaction])
  }

  const handleDeleteTransaction = async id => {
    const { data } = await deleteTransaction(id)
    console.log(data)
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
    const fullDate = new Date(item.transactionDate)
    const date =
      fullDate.getDate().toString().length === 1
        ? `0${fullDate.getDate()}`
        : fullDate.getDate()
    const month =
      fullDate.getMonth().toString().length === 1
        ? `0${fullDate.getMonth()}`
        : fullDate.getMonth()
    const convertDate = `${date}.${month}.${fullDate.getFullYear()}`
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
              {notMobile ? (
                <InfoTable
                  transactions={convertTransaction.filter(
                    item => item.isExpense === isExpense,
                  )}
                  deleteTransaction={handleDeleteTransaction}
                />
              ) : (
                <TableMobile
                  transactions={convertTransaction}
                  deleteTransaction={handleDeleteTransaction}
                />
              )}
              {isDesktop && <Summary />}
            </div>
          </div>
          {isTablet && <Summary />}
        </>
      )}
    </div>
  )
}

export default Budget
