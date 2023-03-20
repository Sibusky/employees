import React, { useMemo, useState, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { EDIT_EMPLOYEE } from "../store/actions";
import { ADD_EMPLOYEE } from "../store/actions";

import { rolesMap } from "../components/employees-filter/constants";
import { selectEmployeeList } from "../store/selectors";
import {
  EMPLOYEE_BIRTHDAY,
  EMPLOYEE_NAME,
  EMPLOYEE_PHONE,
  EMPLOYEE_ROLE,
  EMPLOYEE_ISARCHIVED
} from "../components/employees-list/constants";

const CHOOSE_ROLE = "Выберите должность";
const EMPLOYEE_CARD_TITLE = "Карточка сотрудника";
const EMPLOYEE_ADD_CARD = "Добавить сотрудника";
const EMPLOYEE_NAME_PLACEHOLDER = "Введите имя сотрудника";
const EMPLOYEE_PHONE_PLACEHOLDER = "Введите телефон сотрудника";
const EMPLOYEE_DATE_PLACEHOLDER = "Введите дату рождения сотрудника";
const SAVE_CHANGES = "Сохранить изменения";
const ADD_NEW_USER = "Добавить сотрудника";
const GO_BACK = "Назад";

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
  const [isArchive, setArchive] = useState(employee?.isArchive ?? false);

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
        id: employees.length + 1,
        name,
        phone,
        role,
        birthday,
        isArchive,
      });
      navigate("/");
    },
    [
      editEmployee,
      employees.length,
      name,
      phone,
      role,
      birthday,
      isArchive,
      navigate,
    ]
  );

  // Дисэйблю кнопку добавления, если нет данных
  const isAddButtonDisable = Boolean(!name || !role || !phone || !birthday);

  // Дисэйблю кнопку редактирования, если ничего не изменено
  const isEditButtonDisable = Boolean(
    name === employee.name &&
      role === employee.role &&
      phone === employee.phone &&
      birthday === employee.birthday
  );

  return (
    <main className="main">
      <section className="employee section">
        <div className="employee__container container">
          <h1 className="employee__title section__title">
            {employee.id ? EMPLOYEE_CARD_TITLE : EMPLOYEE_ADD_CARD}
          </h1>
          <form className="employee__form">
            <div className="employee__form-input-container form-input-container">
              <label
                className="employee__form-label form-label text"
                htmlFor="name"
              >
                {EMPLOYEE_NAME}
              </label>
              <input
                className="employee__form-input form-input text"
                placeholder={EMPLOYEE_NAME_PLACEHOLDER}
                type="text"
                id="name"
                value={name}
                onChange={handleChangeName}
              />
            </div>

            <div className="employee__form-input-container form-input-container">
              <label
                className="employee__form-label form-label text"
                htmlFor="role"
              >
                {EMPLOYEE_ROLE}
              </label>
              <select
                className="employee__form-input form-input text"
                value={role}
                onChange={handleChangeRole}
                id="role"
              >
                <option value="" disabled>
                  {CHOOSE_ROLE}
                </option>
                {Object.entries(rolesMap).map(([role, roleName]) => (
                  <option key={role} value={role}>
                    {roleName}
                  </option>
                ))}
              </select>
            </div>

            <div className="employee__form-input-container form-input-container">
              <label
                className="employee__form-label form-label text"
                htmlFor="phone"
              >
                {EMPLOYEE_PHONE}
              </label>
              <input
                className="employee__form-input form-input text"
                placeholder={EMPLOYEE_PHONE_PLACEHOLDER}
                type="tel"
                id="phone"
                value={phone}
                onChange={handleChangePhone}
              />
            </div>

            <div className="employee__form-input-container form-input-container">
              <label
                className="employee__form-label form-label text"
                htmlFor="birthday"
              >
                {EMPLOYEE_BIRTHDAY}
              </label>
              <input
                className="employee__form-input form-input text"
                placeholder={EMPLOYEE_DATE_PLACEHOLDER}
                type="text"
                id="birthday"
                value={birthday}
                onChange={handleChangeDate}
              />
            </div>

            <div className="employee__form-input-container form-input-container">
              <label
                className="employee__form-label form-label text"
                htmlFor="isArchived"
              >
                {EMPLOYEE_ISARCHIVED}
              </label>
              <input
                className="employee__form-input form-input text"
                type="checkbox"
                id="isArchived"
                checked={isArchive}
                onChange={handleChangeArchived}
              />
            </div>

            {employee.id ? (
              <button className={isEditButtonDisable ? "button button_disabled" : 'button'}
                onClick={handleEditSubmit}
                disabled={isEditButtonDisable ? true : false}
              >
                <p className="button-text text">  {SAVE_CHANGES}</p>
              
              </button>
            ) : (
              <button className={isAddButtonDisable ? "button button_disabled" : 'button'}
                onClick={handleAddSubmit}
                disabled={isAddButtonDisable ? true : false}
              >
                <p className="button-text text">{ADD_NEW_USER}</p>
                
              </button>
            )}

            <Link className="button" to="/">
              <p className="button-text text">{GO_BACK}</p>
            </Link>
          </form>
        </div>
      </section>
    </main>
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
