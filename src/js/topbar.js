import React from "react";

export default class TopBar extends React.Component {
  render() {
    return (
      <div id="topbar">
        <div id="inputbar">
          <input />
          <button />
        </div>
        <div id="minstockbar">
          <span>
            Estoque<br />mínimo
          </span>
          <h2>0</h2>
          <button className="plus" />
          <button className="minus" />
        </div>
      </div>
    );
  }
}
