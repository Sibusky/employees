import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "../components/container";
import EmployeesFilter from "../components/employees-filter";
import EmployeesList from "../components/employees-list";

 function MainComponent({ employees = [], fetchEmployees }) {
    useEffect(() => {
        if(employees.length > 0) {
            return;
        }
        fetchEmployees()
    }, [employees.length, fetchEmployees])



  return (
    <Container>
      <h1>Список сотрудников</h1>
      <EmployeesFilter />
      <EmployeesList employees={employees}/>
      <Link to="/new">Добавить</Link>
    </Container>
  );
}

const selectEmployessReducer = (state) => {
    return state?.employeesReducer;
  };
  
  export const selectIsLoadingEmployees = (state) => {
    return selectEmployessReducer(state).isLoading;
  }
  
  export const selectEmployeeList = (state) => {
    return selectEmployessReducer(state)?.employees;
  };

const mapStateToProps = (state) => ({
    employees: selectEmployeeList(state)
})

const mapDispatchToProps = (dispatch) => ({
    fetchEmployees: () => dispatch({type: "FETCH_EMPLOYEES"})
})

export const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    MainComponent
)