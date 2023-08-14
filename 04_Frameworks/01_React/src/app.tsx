import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrganizationProvider } from './contexts/OrganizationContext'
import { PaginationProvider } from './contexts/PaginatorNumberContext'
import Login from "./pages/login";
import GitHubList from "./pages/gitHubList";
import Detail from "./pages/detail";
import Home from "./pages/home";
import RMList from "./pages/rmList/rmList";
import RMDetail from "./pages/rmList/rmDetail"

export const App = () => {
  return (
    <OrganizationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/githublist" element={<GitHubList />} />
          <Route path="/githublist/:id" element={<Detail />} />
          <Route path="/rickmortylist" element={<RMList />} />
          <Route path="/rickmorty/character/:id" element={<RMDetail />} />
        </Routes>
      </Router>
    </OrganizationProvider>
  );
};
