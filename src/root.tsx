import React from "react";
import { Link, Outlet } from "./index";

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
