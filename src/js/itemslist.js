import React from "react";
import Item from "./item"
import styles from "../css/itemslist.css"

export default class ItemsList extends React.Component {
  render() {
    return (
      <div id="listcontainer">
        <Item 
          name={this.getItem().name}
          minStock={this.getItem().minStock}
          amount={this.getItem().amount}/>
      </div>
    );
  }
  getItem(){
    return {name:'Maçã', minStock:10, amount:5};
  }
}
