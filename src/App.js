import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // used to initialize
  constructor() {
    super();

    console.log("1");
    this.state = {
      monsters: [],
    };
  }

  // runs right after the first rendering as thats when component mounts
  // re-renders when setState gets called
  componentDidMount() {
    console.log("3");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  // what to show
  render() {
    console.log("2");

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