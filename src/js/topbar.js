import React from "react";
import styles from "../css/topbar.css"

export default class TopBar extends React.Component {
  constructor() {
    super();
    this.item = {
      name: "",
      minStock: 1,
      amount: 0
    };
  }
  render() {
    return (
      <div id="topbar">
        <div id="inputbar">
          <input id="iteminput" onClick={e => this.onClickItemInput(e)} />
          <button onClick={e => this.onClickSave(e)} />
        </div>
        <div id="minstockbar" className="hidden">
          <span>
            Estoque<br />mínimo
          </span>
          <h2>{this.item.minStock}</h2>
          <button className="plus" onClick={e => this.onClickPlus(e)} />
          <button className="minus" onClick={e => this.onClickMinus(e)} />
        </div>
      </div>
    );
  }
  showMinStockBar() {
    document.getElementById("minstockbar").classList.remove("hidden");
  }
  hideMinStockBar() {
    document.getElementById("minstockbar").classList.add("hidden");
  }
  refreshMinStock() {
    document.querySelector("#minstockbar h2").innerHTML = this.item.minStock;
  }
  onClickItemInput() {
    this.showMinStockBar();
  }
  onClickPlus() {
    this.item.minStock += 1;
    this.refreshMinStock();
  }
  onClickMinus() {
    if (this.item.minStock > 1) {
      this.item.minStock -= 1;
      this.refreshMinStock();
    }
  }
  onClickSave() {
    let itemName = document.getElementById("iteminput").value;
    if (itemName.length === 0) {
      alert("Digite um nome para o produto.");
    } else {
      this.hideMinStockBar();
      document.getElementById("iteminput").value = "";
    }
  }
}
