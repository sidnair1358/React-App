import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/searchbox/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const users = this.setState({ monsters: data });
    return users;
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
