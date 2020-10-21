import { useCallback } from "react";

import { getSearchResult } from "../api";

export const useHelpers = (value, setValue, setSubject) => {
  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const handleClick = useCallback(
    async (e) => {
      e.preventDefault();
      const { name, title } = await getSearchResult(value);
      setSubject({
        name,
        title,
      });
    },
    [value, setSubject]
  );

  return {
    handleChange,
    handleClick,
  };
};
