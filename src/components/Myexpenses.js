import { useState } from 'react';

function MyExpenses() {
  const [list, setList] = useState([]);
  const [expenses, setExpenses] = useState('');
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('product');
  const [date, setDate] = useState(null);
  const addNewRow = () => {
    setList([
      ...list,
      { expenses: expenses },
      { sum: sum },
      { category: category },
      { date: date },
    ]);
    localStorage.setItem('list', JSON.stringify(list));
  };
  return (
    <div id="list">
      <div className="row">
        <div className="col">
          <label>
            <input
              value={expenses}
              onInput={(e) => setExpenses(e.target.value)}
              type="text"
              placeholder="Please enter your expenses"
            />
            <input
              value={sum}
              onInput={(e) => setSum(parseInt(e.target.value))}
              type="number"
              placeholder="please enter summ"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name=""
              id=""
              className="">
              <option value="product">product</option>
              <option value="transport">transport</option>
              <option value="entertainment">entertainment</option>
            </select>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="please choose date"
            />
          </label>
          <button onClick={() => addNewRow()}>Add new value</button>
        </div>
      </div>
      {list.map((item, i) => {
        return (
          <div className="row">
            <div className="col">{[item.expenses, item.sum, item.category, item.date]}</div>
          </div>
        );
      })}
    </div>
  );
}

export default MyExpenses;
