import React, { useState } from "react";
import { createPortal } from "react-dom";

import AddNewButton from "../components/Header/AddNewButton";
import PostDataForm from "../components/Header/PostDataForm";
import SidebarButton from "../components/Header/SidebarButton";
import Sidebar from "./Sidebar";

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-40 bg-white py-2 shadow-lg">
        <div className="container mx-auto flex items-center justify-between gap-2">
          <SidebarButton
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          <AddNewButton showForm={showForm} setShowForm={setShowForm} />
        </div>
      </header>
      {/* Portals */}
      {showForm &&
        createPortal(
          <PostDataForm setShowForm={setShowForm} />,
          document.getElementById("overlays")
        )}
      {showSidebar &&
        createPortal(
          <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />,
          document.getElementById("overlays")
        )}
    </>
  );
};
export default Header;
