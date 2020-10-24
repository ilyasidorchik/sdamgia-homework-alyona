import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { fetchSubject } from "../../../modules/subject";

export const useHelpers = (value, setValue) => {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const handleClick = useCallback(
    async (e) => {
      e.preventDefault();

      dispatch(fetchSubject(value));
    },
    [dispatch, value]
  );

  return {
    handleChange,
    handleClick,
  };
};
