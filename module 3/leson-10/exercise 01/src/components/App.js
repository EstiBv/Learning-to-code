import React from "react";
import "../components/App.scss";
import { peopleFetch } from "../services/ReasonsService";
// import PropTypes from "prop-types";
import CardList from "./CardLIst";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      filter: [],
    };
    this.fetchDataPeople = this.fetchDataPeople.bind(this);
  }

  // handleFilterChange(a) {
  //   this.setState({
  //     filter: a,
  //   });
  // }

  fetchDataPeople() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((dataInfo) => {
        this.setState({
          data: dataInfo,
        });
        console.log("hola");
        console.log(this.state.data);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {" "}
          Hi world
          {/* <Loader/> */}
          <ul className="list">
            <CardList data={this.state.data} />
          </ul>
        </div>
        {/* <Filter/> */}
      </React.Fragment>
    );
  }
}

export default App;
