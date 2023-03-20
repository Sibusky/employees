import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "../components/container";
import { EmployeesFilter } from "../components/employees-filter";
import { EmployeesList } from "../components/employees-list";
import {
  getFilteredAndSortedEmployessList,
  selectIsLoadingEmployees,
} from "../store/selectors";

function MainComponent({ employees = [], isLoadind, fetchEmployees }) {
  useEffect(() => {
    if (employees.length > 0) {
      return;
    }
    fetchEmployees();
  }, [employees.length, fetchEmployees]);

  return (
    <Container>
      <EmployeesFilter />
      {isLoadind ? (
        <div class="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <EmployeesList employees={employees} />
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  employees: getFilteredAndSortedEmployessList(state),
  isLoadind: selectIsLoadingEmployees(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch({ type: "FETCH_EMPLOYEES" }),
});

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
