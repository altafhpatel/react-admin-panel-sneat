import React from "react";

import Sidebar from './Sidebar'
import Footer from './Footer'
import Header from './Header';


// Pass the child props
function Layout({ children }) {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />

        <div className="layout-page">
          <Header />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                {children}
            </div>
            <Footer />
            <div className="content-backdrop fade"></div> 
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  );
}

export default Layout