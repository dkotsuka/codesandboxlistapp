import React from "react";
import TopBar from "./topbar";
import ItemsList from "./itemslist";

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div><TopBar /></div>
        
        <ItemsList />
      </div>
    );
  }
}
