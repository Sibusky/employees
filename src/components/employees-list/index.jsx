import React from "react";
import "./styles.css";

import {
  EMPLOYEE_NAME,
  EMPLOYEE_ROLE,
  EMPLOYEE_PHONE,
  EMPLOYEE_BIRTHDAY,
} from "./constants";
import { Link } from "react-router-dom";

export default function EmployeesList({ employees }) {
  return ( 
    <section className="employees">
      <div className="employees__table">
        <div className="row">
          <div
            className="cell header"
          >{EMPLOYEE_NAME}</div>
          <div className="cell header">{EMPLOYEE_ROLE}</div>
          <div className="cell header">{EMPLOYEE_PHONE}</div>
          <div className="cell header" >
            {EMPLOYEE_BIRTHDAY}
          </div>
        </div>
        {employees?.map(({ id, name, role, phone, birthday }) => (
          <Link to={`edit/${id}`} key={id}>
            <div className="row">
              <div className="cell">{name}</div>
              <div className="cell">{role}</div>
              <div className="cell">{phone}</div>
              <div className="cell">{birthday}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
