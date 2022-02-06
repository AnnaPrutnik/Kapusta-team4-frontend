import ExpenseAndIncome from "../src/components/ExpenseAndIncome/ExpenseAndIncome";
import Home from './components/Home/Home';
import LoginForm from './components/LoginForm/LoginForm';

import ReportView from './views/ReportView/ReportView';

function App() {
  return (
    <div className="App">
      
      <div className="wrapper">
        <Home />
        <LoginForm />

        <section className="container">
          <ExpenseAndIncome/>
          <ReportView />
          
        </section>
      </div>
    </div>
  );
}

export default App;
