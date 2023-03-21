import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Container } from "../components/container";
import PageNotFoundContent from "../components/page-not-found-content";

export function PageNotFound() {
  let navigate = useNavigate();
  let location = useLocation();

  // Это исключительно для GH-Pages
  useEffect(() => {
    if (location.pathname === "/employees/" || location.pathname === "/employees") {
      navigate("/");
    }
  }, [navigate, location.pathname]);

  return (
    <Container>
      <PageNotFoundContent />
    </Container>
  );
}
