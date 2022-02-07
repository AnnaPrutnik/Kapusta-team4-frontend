import React from 'react';
import IncomeOutcomeMenu from '../../components/Report/ReportMenu/ReportMenu';
import ReportCategoryList from '../../components/Report/ReportCategoryList/ReportCategoryList';
// import BalanceBar from '../../components/BalanceBar/BalanceBar';
// import Chart from '../../components/Chart/Chart';

const ReportView = () => {
  return (
    <section className="report_section">
      {/* <BalanceBar /> */}
      <IncomeOutcomeMenu />
      <ReportCategoryList />
      {/* <Chart/> */}
    </section>
  );
};

export default ReportView;
