import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/searh-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(monsters => this.setState({ monsters }));
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
