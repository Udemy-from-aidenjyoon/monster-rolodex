import { Component } from "react";

import "./App.css";
import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-bar/SearchBox.component";

class App extends Component {
  // used to initialize
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // runs right after the first rendering as thats when component mounts
  // re-renders when setState gets called
  componentDidMount() {
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

  onMonsterSearch = (event) => {
    // detect changes to input
    // lower case every search input
    this.setState({
      searchField: event.target.value.toLocaleLowerCase(),
    });
  };

  // what to show
  render() {
    const { monsters, searchField } = this.state;
    const { onMonsterSearch } = this;

    // filter through monsters list
    const filteredMonsters = monsters.filter((monster) => {
      // returns True or False based on lower case of monster's name
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    console.log(filteredMonsters);

    return (
      <div className="App">
        <SearchBox
          className="monster search-box"
          placeholder="seaerch monsters"
          onChangeHandler={onMonsterSearch}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
