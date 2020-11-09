import React from "react";

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.city = {
      BuenosAires:
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Obelisco_en_Buenos_Aires.JPG",
      Sidney:
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/Sydney_Opera_house_HDR_Sydney_Australia.jpg",
      Praga:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/La_Casa_Danzante_de_Praga_2.JPG",
      Tokio:
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/Tokio-grattacieli.jpg",
    };
  }

  render() {
    console.log(this.city);
    return (
      <div>
        <img src={this.city} />
      </div>
    );
  }
}

export default CityImage;
