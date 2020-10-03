import React, { useCallback, useState } from "react";

const SearchForm = () => {
  const [value, setValue] = useState("");
  const [refName, setRefName] = useState("");
  const [refTitle, setRefTitle] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleClick = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await fetch(
        `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
      );
      const data = await response.json();
      const { name, title } = await data.subject;
      setRefName(`https://${name}-ege.sdamgia.ru/`);
      setRefTitle(title);
    },
    [value]
  );

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search here"
          value={value}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Поиск</button>
      </form>
      <div>
        <a href={refName}>{refTitle}</a>
      </div>
    </div>
  );
};

export default SearchForm;
