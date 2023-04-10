import employees from "../../db/employees.json";

import {
  FETCH_EMPLOYEES_FINISHED,
  FETCH_EMPLOYEES_STARTED,
  SET_EMPLOYEES,
} from "../actions";

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_EMPLOYEES_STARTED });
    const request = new Promise((resolve) => {
      setTimeout(() => {
        resolve(employees);
      }, 1000);
    });

    request
      .then((data) => {
        dispatch({ type: SET_EMPLOYEES, payload: data });
        dispatch({ type: FETCH_EMPLOYEES_FINISHED });
      })
      .catch((err) => console.log(err));
  };
};
