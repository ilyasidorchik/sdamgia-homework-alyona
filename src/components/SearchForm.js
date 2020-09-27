import React, { useCallback, useState } from "react";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const buttonIsPushed = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <form>
      <input
        type="text"
        placeholder="Search here"
        value={value}
        onChange={handleChange}
      />
      <button onClick={buttonIsPushed}>Поиск</button>
    </form>
  );
};

export default SearchForm;
