import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "Projects") {
      return <Projects />;
    } else {
      return <Contact />;
    }
  };

  return (
    <div>
      <NavTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}

export default Portfolio;
