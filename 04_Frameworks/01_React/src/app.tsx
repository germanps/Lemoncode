import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import List from "./pages/list";
import Detail from "./pages/detail/detail";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};
