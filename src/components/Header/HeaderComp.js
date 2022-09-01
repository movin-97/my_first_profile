import * as React from "react";
import { NavLink } from "react-router-dom";
import imge from "../../Assets/FB_IMG_1632326254517.jpg";
import {
  Container,
  Navbar,
  Nav,Tooltip,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
const HeaderComp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="ms-3">
          <i className="fa-solid fa-laptop-code"></i> MOVIN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <i className="fa-solid fa-bars text-white fs-3"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="ms-5 nav-link" to={"/"}>
              Home
            </NavLink>
            <NavLink className="ms-5 nav-link" to={"/skills"}>
              Skills
            </NavLink>
            <NavLink className="ms-5 nav-link" to={"/service"}>
              Service
            </NavLink>
            <NavLink className="ms-5 nav-link" to={"/contact"}>
              Contact
            </NavLink>
          </Nav>
          <Nav style={{cursor:'pointer'}}>
            {["bottom"].map((placement) => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`} >
                    Movin Duraisamy Front End Developer
                  </Tooltip>
                }
              >
                <img
                src={imge}
                className="rounded-circle"
                alt="Image"
                height={40}
              />
              </OverlayTrigger>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default HeaderComp;
