import { Component } from "react";
import { useState, useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-bar/SearchBox.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("render");

  // pull monster data from outside api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  // change value based on user search input
  const onMonsterSearch = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // filter monsters array
  // run only when monsters or searchField state changes.
  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      <SearchBox
        className="monster-search-box"
        placeholder="search monsters"
        onChangeHandler={onMonsterSearch}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   // used to initialize
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // runs right after the first rendering as thats when component mounts
//   // re-renders when setState gets called
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         );
//       });
//   }

//   onMonsterSearch = (event) => {
//     // detect changes to input
//     // lower case every search input
//     this.setState({
//       searchField: event.target.value.toLocaleLowerCase(),
//     });
//   };

//   // what to show
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onMonsterSearch } = this;

//     // filter through monsters list
//     const filteredMonsters = monsters.filter((monster) => {
//       // returns True or False based on lower case of monster's name
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     console.log(filteredMonsters);

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           className="monster-search-box"
//           placeholder="seaerch monsters"
//           onChangeHandler={onMonsterSearch}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
