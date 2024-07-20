import React from "react";
import { Outlet } from "react-router-dom";
const MainHeader = () => {
  return (
    <div className="red">
      <Outlet />
    </div>
  );
};

export default MainHeader;
