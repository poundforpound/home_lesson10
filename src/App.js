import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/expenses';
import MyExpenses from './components/expenses';

function App() {
  return (
    <div className="container mt-5">
      <h1>Current Expenses</h1>
      <MyExpenses />
    </div>
  );
}

export default App;
