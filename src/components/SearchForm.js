import React, { Suspense, useCallback, useState } from "react";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      console.log(value);
      fetch(
        `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
      )
        .then((responce) => responce.json())
        .then((subject) =>
          alert(subject.subject.title + ", " + subject.subject.name)
        );
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
