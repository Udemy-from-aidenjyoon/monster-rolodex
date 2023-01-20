import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Jacky" },
        { name: "Andrei" },
        { name: "Linda" },
        { name: "Frank" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, idx) => {
          return <h1 key={idx}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
