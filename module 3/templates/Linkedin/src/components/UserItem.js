import PropTypes from "prop-types";

const UserItem = (props) => {
  const { name, city, image, gender: originalGender } = props.user;

  const gender = originalGender;

  // const translateGender = (gender) => {
  //   if (gender === "female") {
  //     return "Mujer";
  //   } else if (gender === "male") {
  //     return "Hombre";
  //   } else {
  //     return "No binario";
  //   }
  // };
  // OTRA FORMA DE HACER ESTO PARA NO EJECUTAR LA FUNCION EN LA VARIABLE GENDER DEL <P  {translateGender(gender)}>

  let genderCastellano = "No binario";
  if (gender === "female") {
    genderCastellano = "Mujer";
  } else if (gender === "male") {
    genderCastellano = "Hombre";
  }

  return (
    <article className="users__card">
      <div className="users__card--imgContainer">
        <img
          className="users__card--img"
          src={image}
          alt={`Foto de ${name}`}
          title={`Foto de NAME`}
        />
      </div>
      <h4 className="users__card--title">{name}</h4>
      <p className="users__card--description">
        {/* ejercutamos dentro la funcion porque tiene que coger el parámetro y que ejecute la funcion, no se ejecuta al entrar en el componente */}
        {city} / {genderCastellano}
      </p>
    </article>
  );
};

UserItem.propTypes = {
  /* handleFilter: PropTypes.func.isRequired, */
  user: PropTypes.object.isRequired,
};

export default UserItem;
