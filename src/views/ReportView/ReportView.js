import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import ReportMenu from '../../components/Report/ReportMenu/ReportMenu'
import ReportCategoryList from '../../components/Report/ReportCategoryList/ReportCategoryList'
import BalanceBar from '../../components/Report/BalanceBar/BalanceBar'
import Chart from '../../components/Chart/Chart'
import { getIsLoggedIn } from '../../redux/auth'
import * as statisticAPI from '../../services/statisticApi/statisticApi'

const data = [
  {
    name: 'Свинина',
    quantity: 5000,
  },
  {
    name: 'Говядина',
    quantity: 4500,
  },
  {
    name: 'Курица',
    quantity: 3200,
  },
  {
    name: 'Рыба',
    quantity: 2100,
  },
  {
    name: 'Панини',
    quantity: 1800,
  },
  {
    name: 'Кофе',
    quantity: 1700,
  },
  {
    name: 'Спагетти',
    quantity: 1500,
  },
  {
    name: 'Шоколад',
    quantity: 800,
  },
  {
    name: 'Маслины',
    quantity: 500,
  },
  {
    name: 'Зелень',
    quantity: 300,
  },
]

const data2 = [
  {
    name: 'Панини',
    quantity: 1800,
  },
  {
    name: 'Кофе',
    quantity: 1700,
  },
  {
    name: 'Спагетти',
    quantity: 1500,
  },
]

const data5 = [
  {
    name: 'Кофе',
    quantity: 1700,
  },
  {
    name: 'Спагетти',
    quantity: 1500,
  },
  {
    name: 'Шоколад',
    quantity: 800,
  },
  {
    name: 'Маслины',
    quantity: 500,
  },
  {
    name: 'Зелень',
    quantity: 300,
  },
]

const data7 = [
  {
    name: 'Рыба',
    quantity: 2100,
  },
  {
    name: 'Панини',
    quantity: 1800,
  },
  {
    name: 'Кофе',
    quantity: 1700,
  },
  {
    name: 'Спагетти',
    quantity: 1500,
  },
  {
    name: 'Шоколад',
    quantity: 800,
  },
  {
    name: 'Маслины',
    quantity: 500,
  },
  {
    name: 'Зелень',
    quantity: 300,
  },
]
const ReportView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const date = new Date()
  const currentMonth = date.getMonth() + 1
  const currentYear = date.getFullYear()
  const [month, setMonth] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [totalTrans, setTotalTrans] = useState([])

  const handleMonth = value => {
    setMonth(value)
  }
  const handleYear = value => {
    setYear(value)
  }

  useEffect(() => {
    transIn(month, year).then(res => setIncomes(res.data.categories))
  }, [month])

  useEffect(() => {
    transExp(month, year).then(res => setExpenses(res.data.categories))
  }, [month])

  useEffect(() => {
    transactions(month, year).then(res => setTotalTrans(res.data.total))
  }, [month])

  const transIn = async (month, year) => {
    return await statisticAPI.getStatsIncomesForMonth(month, year)
  }

  const transExp = async (month, year) => {
    return await statisticAPI.getStatsExpenseForMonth(month, year)
  }

  const transactions = async (month, year) => {
    return await statisticAPI.getStatsExpenseForMonth(month, year)
  }

  return (
    <>
      {isLoggedIn && (
        <div className="bg">
          <section className="container">
            <BalanceBar
              month={month}
              setMonth={handleMonth}
              year={year}
              setYear={handleYear}
            />
            {totalTrans && <ReportMenu totalTrans={totalTrans} />}
            <ReportCategoryList incomes={incomes} expenses={expenses} />
            <Chart data={data} />
          </section>
        </div>
      )}
    </>
  )
}

export default ReportView
