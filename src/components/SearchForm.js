import React, { useCallback, useState } from "react";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    console.log(value);
  }, [value]);

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
