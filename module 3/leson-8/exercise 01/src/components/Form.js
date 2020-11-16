import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      language: "",
      age: "",
      genre: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    const name = ev.target.name;
    const value = ev.target.value;
    this.props.handleInput(name, value);
    console.log(name);
  }

  // la misma funcion recoge el valor de cada input por su id y actualiza su estado
  // handleInput(ev) {
  //   const inputTypes = [title, description];
  //   if (ev.target.id === "title") {
  //     this.setState({
  //       title: ev.target.value,
  //     });
  //   }
  //   if (ev.currentTarget.id === "description") {
  //     this.setState({
  //       description: ev.target.value,
  //     });
  //   }
  //   if (ev.currentTarget.id === "language") {
  //     this.setState({
  //       language: ev.target.value,
  //     });
  //   }
  // }

  render() {
    console.log("hola");
    return (
      <React.Fragment>
        <form action="">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            onChange={this.handleInput}
            // value={this.state.title}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="description"
            // value={this.state.description}
            onChange={this.handleInput}
          ></textarea>
          {/* languages */}
          <label htmlFor="language">Chose a language</label>
          <select
            name="language"
            id="language"
            onChange={this.handleInput}
            // value={this.state.language}
          >
            <option value="English">English</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Spanish">Spanish</option>
          </select>
          {/* ages */}
          <label htmlFor="all"> All ages</label>
          <input
            onChange={this.handleInput}
            id="all"
            type="radio"
            value="all"
            name="age"
          />
          <label htmlFor="7">7</label>
          <input
            onChange={this.handleInput}
            id="7"
            type="radio"
            value="7"
            name="age"
          />
          <label htmlFor="12">12</label>
          <input
            onChange={this.handleInput}
            id="12"
            type="radio"
            value="12"
            name="age"
          />
          <label htmlFor="16">16</label>
          <input
            onChange={this.handleInput}
            id="16"
            type="radio"
            value="16"
            name="age"
          />
          <label htmlFor="18">18</label>
          <input
            onChange={this.handleInput}
            id="18"
            type="radio"
            value="18"
            name="age"
          />
          {/* genre */}
          <label htmlFor="Drama">Drama</label>
          <input
            onChange={this.handleInput}
            id="Drama"
            type="checkbox"
            value="Drama"
            name="genre"
          />
          <label htmlFor="Acción">Action</label>
          <input
            onChange={this.handleInput}
            id="Action"
            type="checkbox"
            value="Action"
            name="genre"
          />
          <label htmlFor="Comedy">Comedy</label>
          <input
            onChange={this.handleInput}
            id="Comedy"
            type="checkbox"
            value="Comedy"
            name="genre"
          />
          <label htmlFor="Animation">Animation</label>
          <input
            onChange={this.handleInput}
            id="Animation"
            type="checkbox"
            value="Animation"
            name="genre"
          />
          <label htmlFor="Familia">Family</label>
          <input
            onChange={this.handleInput}
            id="Family"
            type="checkbox"
            value="Family"
            name="genre"
          />
          <label htmlFor="Fantasy">Fantasy</label>
          <input
            onChange={this.handleInput}
            id="Fantasy"
            type="checkbox"
            value="Fantasy"
            name="genre"
          />
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
