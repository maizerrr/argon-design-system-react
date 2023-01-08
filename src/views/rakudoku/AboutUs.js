import React from "react";
import classnames from "classnames";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CardHeader,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Progress,
  UncontrolledCarousel
} from "reactstrap";

import RakudokuNavbar from "components/Navbars/RakudokuNavbar";
import RakudokuFooter from "components/Footers/RakudokuFooter";

class AboutUs extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <RakudokuNavbar />
        <main ref="main">
          TODO
        </main>
        <RakudokuFooter />
      </>
    );
  }
}

export default AboutUs;