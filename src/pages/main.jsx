import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "../components/container";
import { EmployeesFilter } from "../components/employees-filter";
import { EmployeesList } from "../components/employees-list";
import {
  selectFilteredEmployeeList,
  selectIsLoadingEmployees,
} from "../store/selectors";

const ADD_EMPLOYEE = "Добавить сотрудника";

function MainComponent({ employees = [], isLoadind, fetchEmployees }) {
  useEffect(() => {
    if (employees.length > 0) {
      return;
    }
    fetchEmployees();
  }, [employees.length, fetchEmployees]);

  return (
    <Container>
      <h1>Список сотрудников</h1>
      <EmployeesFilter />
      {isLoadind ? (
        <p>... Loading ...</p>
      ) : (
        <EmployeesList employees={employees} />
      )}
      <Link to="/new">{ADD_EMPLOYEE}</Link>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  employees: selectFilteredEmployeeList(state),
  isLoadind: selectIsLoadingEmployees(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch({ type: "FETCH_EMPLOYEES" }),
});

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
