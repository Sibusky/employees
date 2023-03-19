import employees from "../../db";

const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";
const FETCH_EMPLOYEES_STARTED = "FETCH_EMPLOYEES_STARTED"
const FETCH_EMPLOYEES_FINISHED = "FETCH_EMPLOYEES_FINISHED"
const SET_EMPLOYEES = "SET_EMPLOYEES"


export const employeesMiddleware = () => {
  return (next) => (action) => {
    if (action.type === FETCH_EMPLOYEES) {
        next({ type: FETCH_EMPLOYEES_STARTED });
        const request = new Promise((resolve) => {
          setTimeout(() => {
            resolve(employees);
          }, 1000);
        });
  
        request.then((data) => {
          next({ type: SET_EMPLOYEES, payload: data });
          next({ type: FETCH_EMPLOYEES_FINISHED });
        });
    }

    next(action)
  };
};
