import {
  SET_EMPLOYEES,
  FETCH_EMPLOYEES_FINISHED,
  FETCH_EMPLOYEES_STARTED,
} from "../actions";

const initialState = {
  employees: [],
  isLoading: false,
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case FETCH_EMPLOYEES_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_EMPLOYEES_FINISHED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
