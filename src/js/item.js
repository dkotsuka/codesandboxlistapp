import React from 'react';
import style from '../css/item.css'

export default class Item extends React.Component{
  constructor(props){
    super(props);
    this.name = props.name;
    this.minStock = props.minStock;
    this.amount = props.amount;
  }
  hasToBuy(){
    if(this.amount < this.minStock){
      return true;
    } else {
      return false;
    }
  }
  getClassName() {
    if(this.hasToBuy()){
      return 'itemunit hastobuy';
    } else {
      return 'itemunit';
    }
    
  }
  render(){
    return (
      <div className={this.getClassName()}>
        <span>{this.name}</span>
        <sup>Min: {this.minStock}</sup>
        <h2>{this.amount}</h2>
      </div>
    );
  }
}