import Home from './components/Home/Home'
import Form from './components/Form/Form'
import ExpenseAndIncome from '../src/components/ExpenseAndIncome/ExpenseAndIncome'
import Home from './components/Home/Home'

import ReportView from './views/ReportView/ReportView'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Home />
        <Form />

        <LoginForm />

        <section className="container">
          <ExpenseAndIncome />
        </section>
        <section className="container">
          <ReportView />
        </section>
      </div>
    </div>
  )
}

export default App
