import { data } from "autoprefixer";
import React, { useCallback, useState } from "react";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleClick = useCallback(
    async (e) => {
      e.preventDefault();

      let responce = await fetch(
        `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
      );
      let data = await responce.json();
      let { name, title } = await data.subject;

      alert(`${name}, ${title}`);
    },
    [value]
  );

  return (
    <form>
      <input
        type="text"
        placeholder="Search here"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Поиск</button>
    </form>
  );
};

export default SearchForm;
