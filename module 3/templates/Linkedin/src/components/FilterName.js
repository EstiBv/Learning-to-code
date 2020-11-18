import PropTypes from "prop-types";

const FilterName = (props) => {
  const handleChange = (ev) => {
    // pasamos filtro para el nombre
    const newValue = ev.currentTarget.value;
    const data = {
      id: "name",
      value: newValue,
    };
    // llamo a esta funcion que está en Raíz
    // props.handleChange(data);
  };

  return (
    <>
      <label className="form__label display-block" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </>
  );
};

FilterName.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterName;
