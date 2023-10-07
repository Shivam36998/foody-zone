import './App.css';

import BillingArea from './components/BillingArea';
import Payment from './components/Payment';
import Shopping from './components/Shopping';
import data from "./data.json"
import { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {

  let [items, setItems] = useState(data);
  let [selected, IsSelected] = useState(1);
  let [billing, setBilling] = useState([]);
  let [total, setTotal] = useState(0);
  let searchHandler = (e) => {
    let value = e.target.value;
    if (value) {
      setItems(data.filter((item) => {
        if (item.name.toLowerCase().includes(value)) {
          return item
        }
      }))
    }
    else {
      setItems(data)
    }
  }
  let menuSelector = (e) => {
    let value = e.target.value
    IsSelected(1);
    if (value) {
      setItems(data.filter((item) => {
        if (item.type === value) {
          return {
            ...item,
          }
        }
      }))
    }
    else {
      setItems(data)
    }
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
            <Shopping
              menuSelector={menuSelector}
              searchHandler={searchHandler}
              data={items}
              selected={selected}
              IsSelected={IsSelected}
              billing={billing}
              setBilling={setBilling} />}/>
          <Route
            exact
            path="/billing"
            element={<BillingArea billing={billing} setBilling={setBilling} setTotal={setTotal} />}
          />
          <Route
            exact
            path="/payment"
            element={<Payment total={total}/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
