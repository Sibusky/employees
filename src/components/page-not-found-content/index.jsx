import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { GO_BACK } from "./constants";

export default function PageNotFoundContent() {
  let navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="page-not-found section">
      <div className="page-not-found__container container">
        <h2 className="page-not-found__title section__title">404</h2>
        <p className="page-not-found__text text">
          Страница не найдена
        </p>
        <button className="button" onClick={() => goBack()}>
            <p className="page-not-found-button-text text">
            {GO_BACK}
            </p>
        </button>
        <Link className="link"><p className="text">На главную</p></Link>
      </div>
    </section>
  );
}
