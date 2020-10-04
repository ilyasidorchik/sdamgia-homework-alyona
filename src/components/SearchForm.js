import React, { useCallback, useState } from "react";

const SearchForm = () => {
  const [value, setValue] = useState("");
  const [subject, setSubject] = useState({
    name: "",
    title: "",
  });

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

      setSubject({
        name,
        title,
      });
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

      {subject && (
        <div>
          <a href={`https://${subject.name}-ege.sdamgia.ru/`}>
            {subject.title}
          </a>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
