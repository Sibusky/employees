import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/container";
import EmployeesFilter from "../components/employees-filter";
import EmployeesList from "../components/employees-list";

export function Main() {
  return (
    <Container>
      <h1>Список сотрудников</h1>
      <EmployeesFilter />
      <EmployeesList />
      <Link to="/new">Добавить</Link>
    </Container>
  );
}
