import * as constants from "./constants";
import { getSearchResult } from "./api";

// Actions
export const fetchSubjectSuccess = (payload) => ({
  type: constants.FETCH_SUBJECT_SUCCESS,
  payload,
});

// Reducers
const subject = (state = null, action) => {
  switch (action.type) {
    case constants.FETCH_SUBJECT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

// Thunks
export const fetchSubject = (value) => async (dispatch) => {
  const { name, title } = await getSearchResult(value);

  dispatch(
    fetchSubjectSuccess({
      name,
      title,
    })
  );
};

export default subject;
