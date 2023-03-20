import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container">
        <p className="footer__text text">Алексей Смирнов</p>
        <div className="footer__links">
          <Link className="footer__link link" to='https://sibusky.github.io/rsschool-cv/cv' target='_blank'>
            <p className="footer__text text">CV</p>
          </Link>
          <Link className="footer__link link" to='https://github.com/Sibusky' target='_blank'>
            <div className="footer__github"></div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
