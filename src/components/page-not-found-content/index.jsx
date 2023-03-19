import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function PageNotFoundContent() {
  let navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="page-not-found section">
      <div className="page-not-found__container section__container">
        <h2 className="page-not-found__title section__title">404</h2>
        <p className="page-not-found__text section__text">
          Страница не найдена
        </p>
        <p
          className="page-not-found__link-back section__text link"
          onClick={goBack}
        >
          Назад
        </p>
      </div>
    </section>
  );
}
