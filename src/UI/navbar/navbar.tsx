import React, { useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";
import UserAvatar from "./../../assets/user-avatar.jpg";

export const getStyleForNavLink = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? {
        cursor: "default",
        color: "blue",
        textDecoration: "none",
      }
    : { color: "black", textDecoration: "none", cursor: "pointer" };

const NavbarComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      <Navbar bg="light" expand="x-lg" className="px-3">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleNavToggle}
        />
        <Navbar.Brand
          as={NavLink}
          to={"/"}
          className="d-flex align-items-center gap-2"
        >
          <Image src={UserAvatar} roundedCircle width="40" height="40" />
          <div>
            <Nav.Item>Name: Andrey Povstyanko</Nav.Item>
            <Nav.Item>Email: werty.potom@gmail.com</Nav.Item>
          </div>
        </Navbar.Brand>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${isNavOpen ? "show" : ""}`}
        >
          <Nav className="mr-auto">
            <Nav.Link to="/" as={NavLink}>
              Posts
            </Nav.Link>
            <Nav.Link to="/about-me" as={NavLink}>
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavbarComponent;
