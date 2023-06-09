import {
  SET_EMPLOYEES,
  EDIT_EMPLOYEE,
  FETCH_EMPLOYEES_FINISHED,
  FETCH_EMPLOYEES_STARTED,
  ADD_EMPLOYEE,
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
    case EDIT_EMPLOYEE:
      return {
        ...state,
        employees: getUpdatedEmployees(state.employees, action.payload),
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: getEmployeesWithNewOne(state.employees, action.payload),
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

const getUpdatedEmployees = (employees, newEmployeeData) => [
  newEmployeeData,
  ...employees.filter((employee) => employee.id !== newEmployeeData.id),
];

const getEmployeesWithNewOne = (employees, newEmployeeData) => [
  newEmployeeData,
  ...employees,
];
