import React from 'react'
import { FaTrash } from 'react-icons/fa';


const TableRow = (props) => {
  const cellstyle ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "16vw",
    height: "20px"
  }
  return (
    <tr style={{display:"flex"}}>
      <th style={cellstyle}>{props.data.id}</th>
      <th style={cellstyle}>{props.data.name}</th>
      <th style={cellstyle}>{props.data.quantity}</th>
      <th style={cellstyle}>{props.data.price * props.data.quantity}</th>
      <th style={cellstyle}>
        <FaTrash />
      </th>
    </tr>
    // <tr style={{display:"flex"}}>
    //   <td >{props.data.id}</td>
    //   <td >{props.data.name}</td>
    //   <td>{props.data.quantity}</td>
    //   <td>{props.data.price * props.data.quantity}</td>
    //   <td>
    //     <FaTrash />
    //   </td>
    // </tr>
  );
}

export default TableRow
