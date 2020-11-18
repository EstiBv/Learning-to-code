import React from "react";
import "../stylesheets/App.scss";
import Filters from "./Filters";
import ProfilesFullList from "../data/Profiles.json";
import UserList from "./UserList";
// import fetch from "./services/getData";
// duda? header en index.html antes?

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: "",
      // variable para que pinta todo el listado inicial, luego se modificia, por lo que filtre. Todo lo que cambia, en estado!
      list: ProfilesFullList,

      genderFilter: "all",
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(data) {
    const { id, value } = data;
    if (id === "name") {
      this.setState(
        {
          nameFilter: value,
        },
        () => {
          this.filterData();
        }
        // a setState le puedo pasar ademas de estados (objetos) tambien funciones, para que se ejecuten en el momento de la condicional que queremos, en este caso cuando se haya ejecutado el estado >>setState es asincrono
      );
    } else if (id === "gender") {
      this.setState(
        {
          genderFilter: value,
        },
        () => {
          this.filterData();
        }
      );
    }
  }

  filterData() {
    // El input name se esucha segun se vaya escribiendo y lo pasa a mayúsculas. Filter() recibe los datos de la persona, y yo le digo la condición con la que se guardan de nueo en el array del estado.
    const listFilter = ProfilesFullList.filter((personData) =>
      personData.name.includes(this.state.nameFilter.toUpperCase())
    ).filter(
      (personData) => personData.gender === "all" || this.state.genderfilter
    );
    this.setState({
      list: listFilter,
    });
  }

  render() {
    return (
      <main className="App">
        <section className="container">
          {/* <Loader/> */}
          <Filters handleFilter={this.handleFilter} />
          <UserList list={this.state.list} />
        </section>
      </main>
    );
  }
}

export default App;
