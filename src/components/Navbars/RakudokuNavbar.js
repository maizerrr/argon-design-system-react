import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class RakudokuNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light bg-white headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  style={{"max-width":"200px", "max-height":"20px"}}
                  alt="≡"
                  src={require("assets/img/brand/rakudoku-logo-dark.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          style={{"max-width":"200px", "max-height":"20px"}}
                          alt="..."
                          src={require("assets/img/brand/rakudoku-logo-green.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink
                      to="/"
                      tag={Link}
                      id="homepage_ref"
                    >
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-dark">Home</span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="homepage_ref">
                      Go to Rakudoku USA homepage
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/about"
                      tag={Link}
                      id="aboutus_ref"
                    >
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-dark">About Us</span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="aboutus_ref">
                      Learn more about Rakudoku USA
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/service"
                      tag={Link}
                      id="service_ref"
                    >
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-dark">Service</span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="service_ref">
                      Check plans we provide
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    )
  }
}

export default RakudokuNavbar;