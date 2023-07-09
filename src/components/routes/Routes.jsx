import React from "react";
import { Routes, Route } from "react-router-dom";
import CardExtend from "../Content/Card/CardExtend/CardExtend";
import Content from "../Content/Content";
import { useSelector } from "react-redux";

export default function AddRoutes() {
  const pagesRoutes = useSelector((state) => state.items.categories);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Content path="tshirts" />} />
      </Routes>
      {pagesRoutes.map((r) => (
          <Routes  key={r.id}>
            <Route
              exact
              path={`/${r.path}`}
              element={<Content path={r.path} />}
            />
            <Route
              exact
              path={`/${r.path}/:id`}
              element={<CardExtend path={r.path} />}
            />
          </Routes>
        ))}
    </div>
  );
}
