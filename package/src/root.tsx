import React from "react";
import { Link } from "./components/Link";
import Outlet from "./components/Outlet";

export default ({ children }: { children?: React.ReactNode }) => (
  <>
    <Link to="/home/123">go home</Link>
    <br />
    <Link to="/about">go about</Link>
    <br />
    <Link to="/test">go test</Link>
    <Outlet />
  </>
);
