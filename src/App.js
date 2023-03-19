import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./pages/layout";
import { Main } from "./pages/main";
import { Employee } from "./pages/employee";
import { Login } from "./pages/login";
import { PageNotFound } from "./pages/page-not-found";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="edit/:employeeId" element={<Employee />} />
            <Route path="new" element={<Employee />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
