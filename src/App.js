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
          <ReportView />
        </section>
      </div>
    </div>
  );
}

export default App;
