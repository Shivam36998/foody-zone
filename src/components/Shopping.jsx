
import React from 'react'
import Navbar from "./Navbar";
import MainArea from "./MainArea";

const Shopping = (props) => {
  return (
    <div>
      <Navbar
        menuSelector={props.menuSelector}
        searchHandler={props.searchHandler}
      />
      <MainArea
        data={props.data}
        selected={props.selected}
        IsSelected={props.IsSelected}
        billing={props.billing}
        setBilling={props.setBilling}
      />
    </div>
  );
}

export default Shopping
