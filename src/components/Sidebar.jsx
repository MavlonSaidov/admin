import React from "react";
import SideRoute from "./SideRoute";
import { BrowserRouter, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-white shadow pt-24 p-b pr-5 rounded-b-xl flex flex-col  mb-4  h-[calc(100vh-32px)]">
      <BrowserRouter>
        <a href="/">
          <SideRoute name={"Asosiy"} />
        </a>
        <a href="/reception">
          <SideRoute name={"Qabulxona"} />
        </a>
        <Link to="/services">
          <SideRoute name={"Xizmatlar"} />
        </Link>
        <Link to="/patients">
          <SideRoute name={"Bemorlar"} />
        </Link>
        <Link to="/debtors">
          <SideRoute name={"Qarzdorlar"} />
        </Link>
        <Link to="/outputs">
          <SideRoute name={"Chiqimlar"} />
        </Link>
        <Link to="/reports">
          <SideRoute name={"Hisobotlar"} />
        </Link>
      </BrowserRouter>
    </aside>
  );
};

export default Sidebar;
