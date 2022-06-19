import React, { useContext } from "react";
import { OutletContext } from "./Router";

const Outlet = () => {
  const outlet = useContext(OutletContext);
  return outlet || null;
};

export default Outlet;
