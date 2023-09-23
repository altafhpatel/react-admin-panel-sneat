import React from "react";
import { Nav,Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i className="bx bx-menu bx-sm"></i>
        </a>
      </div>

      <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
        {/* Search */}
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0"></i>
            <input
              type="text"
              className="form-control border-0 shadow-none ps-1 ps-sm-2"
              placeholder="Search..."
              aria-label="Search..." />
          </div>
        </div>
        {/* Search */}
        <Nav className="navbar-nav flex-row align-items-center ms-auto">
          <Nav.Link href="#home">Star</Nav.Link>
          <NavDropdown title={
            <div className="avatar avatar-online">
              <img src={require('../../assets/img/avatars/1.png')} className="w-px-40 h-auto rounded-circle" />
            </div>
            } id="basic-nav-dropdown" className="e-caret-hide">
              <NavDropdown.Item href="#action/3.1">John Doe<small className="d-block">Admin</small></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </div>
      </Navbar>
  )
}


export default Header;