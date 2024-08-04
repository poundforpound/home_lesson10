import { createElement } from 'react';

function MyExpenses() {
  return (
    <div id="list">
      {setTimeout(() => {
        addNewRow();
      }, 1)}
    </div>
  );
}

function addNewRow() {
  let div = document.createElement('div');
  div.innerHTML = `<div className="row">
	<div className="col">
		<label>
			<input type="text" placeholder="Please enter your expenses" />
			<input type="number" placeholder="please enter summ" />
			<select name="" id="" className="">
				<option value="product">product</option>
				<option value="transport">transport</option>
				<option value="entertainment">entertainment</option>
			</select>
			<input type="date" placeholder="please choose date" />
		</label>
		<button onClick={() => addNewRow()}>Add new value</button>
	</div>
</div>`;
  let list = document.getElementById('list');
  list.append(div);
}

export default MyExpenses;
