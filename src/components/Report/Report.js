import { useState, useEffect } from 'react'
import ReportMenu from './CommonStats/ReportMenu'
import ReportCategoryList from './CategoryStats/ReportCategoryList'
import BalanceBar from './BalanceBar/BalanceBar'
import Chart from './Chart/Chart'
import {
  getStatsIncomesForMonth,
  getStatsExpenseForMonth,
} from '../../services/statisticApi/statisticApi'

function Report() {
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)
  const [isExpense, setIsExpense] = useState(true)
  const [category, setCategories] = useState([])
  const [totalTrans, setTotalTrans] = useState([])
  const [currentCategory, setCurrentCategory] = useState(null) //сюда надо записать активную категорию

  useEffect(() => {
    if (isExpense) {
      expensesStats(month, year).then(res => {
        setTotalTrans(res.data.total)
        setCategories(res.data.categories)
      })
    } else {
      incomesStats(month, year).then(res => {
        setTotalTrans(res.data.total)
        setCategories(res.data.categories)
      })
    }
  }, [month, isExpense])

  const handleChangeMonth = value => {
    setMonth(value)
  }
  const handleChangeYear = value => {
    setYear(value)
  }

  const handleChangeIsExpense = value => {
    setIsExpense(value)
  }

  const handleChangeActiveCategory = id => {
    setCurrentCategory(id)
  }

  const incomesStats = async (month, year) => {
    return await getStatsIncomesForMonth(month, year)
  }

  const expensesStats = async (month, year) => {
    return await getStatsExpenseForMonth(month, year)
  }

  return (
    <>
      <BalanceBar setMonth={handleChangeMonth} setYear={handleChangeYear} />
      <ReportMenu totalTrans={totalTrans} />
      <ReportCategoryList
        categories={category}
        isExpense={isExpense}
        changeIsExpense={handleChangeIsExpense}
        changeActiveCategory={handleChangeActiveCategory}
      />
      {currentCategory && (
        <Chart id={currentCategory} month={month} year={year} />
      )}
    </>
  )
}

export default Report
