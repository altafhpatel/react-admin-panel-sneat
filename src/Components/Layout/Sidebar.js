import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {

  const showMenu = (e) => {
    e.preventDefault();
    // this method handles the open closing of menus
    const findAll = document.getElementsByClassName('menu-item open');
    Array.from(findAll).forEach((element) => {
      element.classList.remove('open');
    });
    const classList = e.target.parentNode.classList;
    classList.add('open')

  }
  return (
    <>
      <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
        <div className="app-brand demo">
          <a href="index.html" className="app-brand-link">
            <span className="app-brand-logo demo"><img src={require('../../assets/img/logo.png')} /></span>
            {/* <span className="app-brand-text demo menu-text fw-bold ms-2">Admin Panel</span> */}
          </a>

          <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          {/* Dashboard */}
          <li className="menu-item">
            <Link to="/" className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </Link>
          </li>

          {/* Layouts */}
          <li className="menu-item" onClick={(e) => showMenu(e)}>
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-layout"></i>
              <div data-i18n="Layouts">Layouts</div>
            </a>

            <ul className="menu-sub showmenu">
              <NavLink to="/" className="menu-link menu-item">Without Menu</NavLink>
              <NavLink to="/" className="menu-link menu-item">Without Navbar</NavLink>
              <NavLink to="/" className="menu-link menu-item">Container</NavLink>
              <NavLink to="/" className="menu-link menu-item">Fluid</NavLink>
              <NavLink to="/" className="menu-link menu-item">Blank</NavLink>
            </ul>
          </li>

          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Pages</span>
          </li>
          <li className="menu-item">
            <Link to="/panel/account" className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              Account
            </Link>
          </li>
          <li className="menu-item" onClick={(e) => showMenu(e)}>
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
              Authentications
            </a>
            <ul className="menu-sub">
              <NavLink to="/panel/login" className="menu-link menu-item">Login</NavLink>
              <NavLink to="/panel/register" className="menu-link menu-item">Register</NavLink>
              <NavLink to="/panel/forgotpassword" className="menu-link menu-item">Forgot Password</NavLink>
            </ul>
          </li>
          <li className="menu-item" onClick={(e) => showMenu(e)}>
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-cube-alt"></i>
              Misc
            </a>
            <ul className="menu-sub">
              <NavLink to="/panel/error" className="menu-link menu-item">Error</NavLink>
              <NavLink to="/panel/maintenance" className="menu-link menu-item">Under Maintenance</NavLink>
            </ul>
          </li>
          {/* Components */}
          <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li>
          {/* Cards */}
          <li className="menu-item">
            <a href="cards-basic.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-collection"></i>
              Cards
            </a>
          </li>
          {/* User interface */}
          <li className="menu-item" onClick={(e) => showMenu(e)}>
            <a href="javascript:void(0)" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-box"></i>
              User interface
            </a>
            <ul className="menu-sub">
              <NavLink to="/panel/accordion" className="menu-link menu-item">Accordion</NavLink>
              <NavLink to="/panel/alerts" className="menu-link menu-item">Alert</NavLink>
              <NavLink to="/panel/badges" className="menu-link menu-item">Badges</NavLink>
              <NavLink to="/panel/buttons" className="menu-link menu-item">Buttons</NavLink>

              <NavLink to="/panel/carousel" className="menu-link menu-item">Carousel</NavLink>
              <NavLink to="/panel/collapse" className="menu-link menu-item">Footer</NavLink>

              <NavLink to="/panel/dropdowns" className="menu-link menu-item">Dropdowns</NavLink>
              <NavLink to="/panel/listgroups" className="menu-link menu-item">List Groups</NavLink>
              <NavLink to="/panel/modals" className="menu-link menu-item">Modals</NavLink>
              <NavLink to="/panel/navbar" className="menu-link menu-item">Navbar</NavLink>
              <NavLink to="/panel/offcanvas" className="menu-link menu-item">Offcanvas</NavLink>

              <NavLink to="/panel/pagination-breadcrumbs" className="menu-link menu-item">Pagination & Breadcrumbs</NavLink>
              <NavLink to="/panel/progress" className="menu-link menu-item">Progress</NavLink>

              <NavLink to="/panel/spinners" className="menu-link menu-item">Spinners</NavLink>
              <NavLink to="/panel/tabspills" className="menu-link menu-item">Tabs & Pills</NavLink>
              <NavLink to="/panel/toasts" className="menu-link menu-item">Toasts</NavLink>
              <NavLink to="/panel/tooltipspopovers" className="menu-link menu-item">Tooltips & Popovers</NavLink>
              <NavLink to="/panel/typography" className="menu-link menu-item">Typography</NavLink>
            </ul>
          </li>

          {/* Extended components */}
          <li className="menu-item" onClick={(e) => showMenu(e)}>
            <a href="javascript:void(0)" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-copy"></i>
              <div data-i18n="Extended UI">Extended UI</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
                  <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="extended-ui-text-divider.html" className="menu-link">
                  <div data-i18n="Text Divider">Text Divider</div>
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-item">
            <a href="icons-boxicons.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-crown"></i>
              Boxicons
            </a>
          </li>

          {/* Forms & Tables */}
          <li className="menu-header small text-uppercase"><span className="menu-header-text">Forms &amp; Tables</span></li>
          {/* Forms */}
          <li className="menu-item" onClick={(e) => showMenu(e)}>
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-detail"></i>
              Form Elements
            </a>
            <ul className="menu-sub">
              <NavLink to="/panel/basicinputs" className="menu-item menu-link">
                Basic Inputs
              </NavLink>
              <NavLink to="/panel/groupinputs" className="menu-item menu-link">
                Group Inputs
              </NavLink>
            </ul>
          </li>
          <li className="menu-item" onClick={(e) => showMenu(e)}>
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-detail"></i>
              Form Layouts
            </a>
            <ul className="menu-sub">
              <NavLink to="/panel/verticalform" className="menu-link menu-item">
                Vertical Form
              </NavLink>
              <NavLink to="/panel/horizontalform" className="menu-item menu-link">
                Horizontal Form
              </NavLink>
            </ul>
          </li>
          {/* Tables */}
          <li className="menu-item">
            <Link to="/panel/tables" className="menu-link">
              <i className="menu-icon tf-icons bx bx-table"></i>
              <div data-i18n="Tables">Tables</div>
            </Link>

          </li>
          {/* Misc */}
          <li className="menu-header small text-uppercase"><span className="menu-header-text">Misc</span></li>
          <li className="menu-item">
            <a
              href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
              target="_blank"
              className="menu-link">
              <i className="menu-icon tf-icons bx bx-support"></i>
              <div data-i18n="Support">Support</div>
            </a>
          </li>
          <li className="menu-item">
            <a
              href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/"
              target="_blank"
              className="menu-link">
              <i className="menu-icon tf-icons bx bx-file"></i>
              <div data-i18n="Documentation">Documentation</div>
            </a>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar