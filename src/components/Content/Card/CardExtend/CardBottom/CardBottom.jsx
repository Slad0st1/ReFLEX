import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../Card";
import { useSelector } from "react-redux";
import Content from "../../../Content";
export default function CardBottom({path}) {
  return (
    <div>
      <Content path={path} />
    </div>
  );
}
