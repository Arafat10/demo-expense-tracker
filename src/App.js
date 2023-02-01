import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransList } from './components/TransList';
import { AddTrans } from './components/AddTrans';

function App() {
  return (
    <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransList />
          <AddTrans />
        </div>
    </div>
  );
}

export default App;
