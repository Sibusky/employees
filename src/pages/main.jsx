import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "../components/container";
import EmployeesFilter from "../components/employees-filter";
import EmployeesList from "../components/employees-list";
import { selectEmployeeList } from "../store/selectors";

function MainComponent({ employees = [], fetchEmployees }) {
  useEffect(() => {
    if (employees.length > 0) {
      return;
    }
    fetchEmployees();
  }, [employees.length, fetchEmployees]);

  console.log( employees)
  return (
    <Container>
      <h1>Список сотрудников</h1>
      <EmployeesFilter />
      <EmployeesList employees={employees} />
      <Link to="/new">Добавить</Link>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  employees: selectEmployeeList(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch({ type: "FETCH_EMPLOYEES" }),
});

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
