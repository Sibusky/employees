import { SET_ROLE_FILTER, SET_ARCHIVED_FILTER } from "../actions";

const initialState = {
  roleFilter: "",
  isArchivedFilter: null,
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE_FILTER:
      return {
        ...state,
        roleFilter: action.payload,
      };
    case SET_ARCHIVED_FILTER:
      return {
        ...state,
        isArchivedFilter: action.payload,
      };
    default:
      return state;
  }
};
