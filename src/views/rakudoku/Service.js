import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

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
  UncontrolledTooltip
} from "reactstrap";

import RakudokuNavbar from "components/Navbars/RakudokuNavbar";
import RakudokuFooter from "components/Footers/RakudokuFooter";

import bg3 from "assets/img/theme/image-2.jpeg";

class Service extends React.Component {
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
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped">
              <div 
                className="shape shape-style-1 shape-default bg-image"
                style={{
                  "background-image": `url(${bg3})`, 
                  "background-position": "center",
                  "background-repeat": "no-repeat"
                }}
              >
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <br /><br />
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col 
                      lg="6"
                      style={{
                        "background-color": "rgba(250, 250, 250, 0.5)"
                      }}
                    >
                      <h1 className="display-3 text-black">
                        Our Service
                        <span className="display-4">Choose a plan that suits you best</span>
                      </h1>
                      <p className="lead text-black">
                        Learning to read fast requires constant training. 
                        With Rakudoku, you can easily read 4 to 8 times a 
                        month over a period of 3 to 6 months.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>

          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h3 className="display-4">
                    We provide both in-person and online lessons
                  </h3>
                  <p className="lead">
                    Rakudoku USA offers one free trial seminar to each new customer. 
                    After that, you may choose to become a formal student by purchasing 
                    one of the following training plans.
                  </p>
                  <small>
                    * Once you enrolled our monthly plan, a one-time registration fee of $100 will be charged for buying textbooks and other learning materials.
                  </small>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="6">
                      <Card 
                        className="card-lift--hover shadow border-0 bg-gradient-light"
                        to="/"
                        tag={Link}
                        id="plan_0"
                      >
                        <CardBody className="py-5">
                          <h6 className="text-white font-weight-bold">Trial lesson/90min</h6>
                          <p className="text-white">free</p>
                        </CardBody>
                      </Card>
                      <UncontrolledTooltip delay={0} target="plan_0">
                        Visit our homepage to fill out the signup form
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="6">
                      <Card 
                        className="card-lift--hover shadow border-0 bg-gradient-warning"
                        to="/"
                        tag={Link}
                        id="plan_1"
                      >
                        <CardBody className="py-5">
                          <h6 className="text-white font-weight-bold">2 lessons/month</h6>
                          <p className="text-white">$120</p>
                        </CardBody>
                      </Card>
                      <UncontrolledTooltip delay={0} target="plan_1">
                        Visit our homepage to fill out the signup form
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card 
                        className="card-lift--hover shadow border-0 bg-gradient-primary"
                        to="/"
                        tag={Link}
                        id="plan_2"
                      >
                        <CardBody className="py-5">
                          <h6 className="text-white font-weight-bold">4 lessons/month</h6>
                          <p className="text-white">$240</p>
                        </CardBody>
                      </Card>
                      <UncontrolledTooltip delay={0} target="plan_2">
                        Visit our homepage to fill out the signup form
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="4">
                      <Card 
                        className="card-lift--hover shadow border-0 bg-gradient-default"
                        to="/"
                        tag={Link}
                        id="plan_3"
                      >
                        <CardBody className="py-5">
                          <h6 className="text-white font-weight-bold">6 lessons/month</h6>
                          <p className="text-white">$360</p>
                        </CardBody>
                      </Card>
                      <UncontrolledTooltip delay={0} target="plan_3">
                        Visit our homepage to fill out the signup form
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="4">
                      <Card 
                        className="card-lift--hover shadow border-0 bg-gradient-info"
                        to="/"
                        tag={Link}
                        id="plan_4"
                      >
                        <CardBody className="py-5">
                          <h6 className="text-white font-weight-bold">8 lessons/month</h6>
                          <p className="text-white">$480</p>
                        </CardBody>
                      </Card>
                      <UncontrolledTooltip delay={0} target="plan_4">
                        Visit our homepage to fill out the signup form
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <RakudokuFooter />
      </>
    );
  }
}

export default Service;