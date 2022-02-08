import React from 'react'
import IncomeOutcomeMenu from '../../components/Report/ReportMenu/ReportMenu'
import ReportCategoryList from '../../components/Report/ReportCategoryList/ReportCategoryList'
// import BalanceBar from '../../components/BalanceBar/BalanceBar'
import BalanceBar from '../../components/Report/BalanceBar/BalanceBar'
import Chart from '../../components/Chart/Chart'

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

const ReportView = () => {
  return (
    <section className="container">
      <BalanceBar />
      <IncomeOutcomeMenu />
      <ReportCategoryList />
      <Chart data={data} />
    </section>
  )
}

export default ReportView
