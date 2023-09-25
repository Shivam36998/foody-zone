import './App.css';
import Navbar from "./components/Navbar"
import MainArea from "./components/MainArea"
import data from "./data.json"
import { useState } from 'react';

function App() {

  let [items, setItems] = useState(data);
  let searchHandler = (e) => {
    let value = e.target.value;
    if(value){
      setItems(data.filter((item)=>{
        if(item.name.toLowerCase().includes(value)){
          return item
        }
      }))
    }
    else{
      setItems(data)
    }
  }
  let menuSelector = (e) => {
    let value = e.target.value
    if (value) {
      setItems(data.filter((item) => {
        if (item.type === value) {
          return {
            ...item,
          }
        }
      }))
    }
    else{
      setItems(data)
    }
  }



  return (
    <>
      <Navbar menuSelector={menuSelector} searchHandler={searchHandler} />
      <MainArea data={items} />
    </>
  );
}

export default App;
