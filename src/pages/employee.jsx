import React, { useMemo, useState, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { EDIT_EMPLOYEE } from "../store/actions";
import { ADD_EMPLOYEE } from "../store/actions";

import { rolesMap } from "../components/employees-filter/constants";
import { selectEmployeeList } from "../store/selectors";

const EMPLOYEE_CARD_TITLE = "Карточка сотрудника";
const EMPLOYEE_ADD_CARD = "Форма добавления сотрудника";
const EMPLOYEE_NAME_PLACEHOLDER = "Введите имя сотрудника";
const EMPLOYEE_PHONE_PLACEHOLDER = "Введите телефон сотрудника";
const EMPLOYEE_DATE_PLACEHOLDER = "Введите дату рождения сотрудника";
const SAVE_CHANGES = "Сохранить изменения";
const ADD_NEW_USER = "Добавить сотрудника";
const GO_BACK = "< Назад";

const EmployeeComponent = ({ editEmployee, employees }) => {
  const { employeeId } = useParams();
  const employee = useMemo(
    () =>
      employees?.find((employee) => employee.id === Number(employeeId)) ?? {},
    [employees, employeeId]
  );

  const [name, setName] = useState(employee?.name ?? "");
  const [phone, setPhone] = useState(employee?.phone ?? "");
  const [role, setRole] = useState(employee?.role ?? "");
  const [birthday, setBirthday] = useState(employee?.birthday ?? "");
  const [isArchive, setArchive] = useState(employee?.isArchive ?? "");

  let navigate = useNavigate();

  const handleChangeName = useCallback(
    (ev) => {
      setName(ev.target.value);
    },
    [setName]
  );

  const handleChangePhone = useCallback(
    (ev) => {
      setPhone(ev.target.value);
    },
    [setPhone]
  );

  const handleChangeRole = useCallback(
    (ev) => {
      setRole(ev.target.value);
    },
    [setRole]
  );

  const handleChangeDate = useCallback(
    (ev) => {
      setBirthday(ev.target.value);
    },
    [setBirthday]
  );

  const handleChangeArchived = useCallback(
    (ev) => {
      setArchive(ev.target.checked);
    },
    [setArchive]
  );

  const handleEditSubmit = useCallback(
    (ev) => {
      ev.preventDefault();
      editEmployee({
        id: employee.id,
        name,
        phone,
        role,
        birthday,
        isArchive,
      });
      navigate("/");
    },
    [employee, editEmployee, name, phone, role, birthday, isArchive, navigate]
  );

  const handleAddSubmit = useCallback(
    (ev) => {
      ev.preventDefault();
      editEmployee({
        id: Date.now(),
        name,
        phone,
        role,
        birthday,
        isArchive,
      });
      navigate("/");
    },
    [editEmployee, name, phone, role, birthday, isArchive, navigate]
  )

  console.log(employee, "employee");

  return (
    <div>
      <h1>{employee.id ? EMPLOYEE_CARD_TITLE : EMPLOYEE_ADD_CARD}</h1>
      <form>
        <input
          placeholder={EMPLOYEE_NAME_PLACEHOLDER}
          type="text"
          value={name}
          onChange={handleChangeName}
        />
        <select value={role} onChange={handleChangeRole}>
          {Object.entries(rolesMap).map(([role, roleName]) => (
            <option key={role} value={role}>
              {roleName}
            </option>
          ))}
        </select>
        <input
          placeholder={EMPLOYEE_PHONE_PLACEHOLDER}
          type="tel"
          value={phone}
          onChange={handleChangePhone}
        />
        <input
          placeholder={EMPLOYEE_DATE_PLACEHOLDER}
          type="text"
          value={birthday}
          onChange={handleChangeDate}
        />
        <input
          type="checkbox"
          checked={isArchive}
          onChange={handleChangeArchived}
        />
        <Link to="/">{GO_BACK}</Link>

        {employee.id ? (
          <button onClick={handleEditSubmit}>
          {SAVE_CHANGES}
          </button>
        ) : (
          <button onClick={handleAddSubmit}>
            {ADD_NEW_USER}
          </button>
        )}

        {/* <button type="submit" onClick={handleSubmit}>
          {employee.id ? SAVE_CHANGES : ADD_NEW_USER}
        </button> */}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  employees: selectEmployeeList(state),
});

const mapDispatchToProps = (dispatch) => ({
  editEmployee: (payload) => dispatch({ type: EDIT_EMPLOYEE, payload }),
  addEmployee: (payload) => dispatch({ type: ADD_EMPLOYEE, payload }),
});

export const Employee = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeComponent);
