import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";
import stylesSearchBar from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    dispatch(getCountryByName(name));
    setName("");
  };

  return (
    <div className={stylesSearchBar.div}>
      <form onSubmit={handleSubmit}>
        <input
          className={stylesSearchBar.input}
          type="search"
          placeholder="Search country by name..."
          onChange={handleInputChange}
          value={name}
        />
        <button className={stylesSearchBar.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
