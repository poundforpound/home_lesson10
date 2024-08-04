import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyExpenses from './components/Myexpenses';

function App() {
  return (
    <div className="container mt-5">
      <h1>Current Expenses</h1>
      <MyExpenses />
    </div>
  );
}

export default App;
