import React from "react";
import { Routes, Route } from "react-router-dom";
import CardExtend from "../Content/Card/CardExtend/CardExtend";
import Content from "../Content/Content";
import { useSelector } from "react-redux";

export default function AddRoutes() {
  const pagesRoutes = useSelector(state => state.items.categories);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Content path="tshirts" />} />
        {pagesRoutes.map((r) => (
          <>
            <Route
              key={r.path}
              path={`/${r.path}`}
              element={<Content path={r.path} />}
            />
            <Route
              key={r.path}
              path={`/${r.path}/:id`}
              element={<CardExtend path={r.path} />}
            />
          </>
        ))}
      </Routes>
    </div>
  );
}
