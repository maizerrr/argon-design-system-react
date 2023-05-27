import React from "react";
import { osName } from "react-device-detect";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Form,
  Container,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Progress,
} from "reactstrap";

// core components
import RakudokuNavbar from "components/Navbars/RakudokuNavbar.js";
import RakudokuFooter from "components/Footers/RakudokuFooter.js";

// images
import bg1 from "assets/img/theme/image-1.jpeg";

// const itemsLeft = [
//   {
//     src: require("assets/img/theme/img-1-1200x1000.jpg"),
//     caption: 'Being able to see the letters faster will lead to faster reading. We will focus on "seeing letters" and perform visual training to speed up the eyes.',
//     header: 'To "see" faster'
//   },
//   {
//     src: require("assets/img/theme/img-2-1200x1000.jpg"),
//     caption: 'Increasing the amount of characters that can be captured at once will lead to faster reading. We will train you to broaden your horizons so that you can catch more information at once.',
//     header: 'To "see" more'
//   }
// ];

// const itemsRight = [
//   {
//     caption: "",
//     header: ""
//   },
//   {
//     caption: "",
//     header: ""
//   }
// ];

class Home extends React.Component {
  state = {
    tabsLeft: 1,
    tabsRight: 1,
    isMobile: window.innerWidth < 992,
    os: osName
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  scrollTo = (os, id) => {
    if (os === "iOS") {
      document.getElementById(id).scrollIntoView(true);
    } else {
      document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start"});
    }
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    window.addEventListener("resize", () => {
      this.setState({
        isMobile: window.innerWidth < 992
      })
    }, false);
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
                  "background-image": `url(${bg1})`, 
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
                        Learn to read fast 
                        <span>in a fun and easy way</span>
                      </h1>
                      <p className="lead text-black">
                        Through taking the course, you will be able to read and understand 2 to 7 times faster.
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

          <section className="section section-lg" id="signup_form">
            <Container className="py-md">
              <Row className="row-grid justify-content-between align-items-center">
                <Col lg="6">
                  <h3 className="display-3 text-dark">
                    Over <a className="text-default" style={{"pointerEvents": "none"}}>50,000</a> people have chosen RAKUDOKU
                  </h3>
                  <p className="lead text-dark">
                    In Japan, more than 50,000 people have taken the RAKUDOKU trial seminar, 
                    and more than 90% of them have realized the effect of speed reading. 
                  </p>
                </Col>
                <Col className="mb-lg-auto" lg="5">
                  <div className="transform-perspective-right">
                    <Card className="floating bg-gradient-default shadow border-0">
                      <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center mb-4">
                          <h1 className="display-3 text-white">SIGNUP NOW</h1>
                          {/* <span className="text-white">Please provide some basic information and our staff member will contact you</span> */}
                        </div>
                        <hr />
                        <Form role="form">
                          {/* <FormGroup
                            className={classnames("mb-3", {
                              focused: this.state.nameFocused
                            })}
                          >
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-hat-3" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                                placeholder="Name"
                                type="text"
                                onFocus={(e) =>
                                  this.setState({ nameFocused: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ nameFocused: false })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup
                            className={classnames("mb-3", {
                              focused: this.state.emailFocused
                            })}
                          >
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                                placeholder="Email"
                                type="email"
                                onFocus={(e) =>
                                  this.setState({ emailFocused: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ emailFocused: false })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup
                            className={classnames("mb-3", {
                              focused: this.state.referralFocused
                            })}
                          >
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-briefcase-24" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                                placeholder="Referral Code"
                                type="text"
                                onFocus={(e) =>
                                  this.setState({ referralFocused: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ referralFocused: false })
                                }
                              />
                            </InputGroup>
                          </FormGroup> */}
                          <div className="text-left">
                            <p className="lead text-white">
                              If you are interested, please fill out this Google form and
                              our staff members will contact you shortly.
                            </p>
                          </div>
                          <div className="text-center">
                            <Button
                              className="my-4"
                              color="white"
                              outline
                              type="button"
                              href="https://forms.gle/zuUbnSD5xVjAwspb9"
                              target="_blank"
                            >
                              Contact us
                            </Button>
                          </div>
                        </Form>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          
          <section className="section section-lg bg-secondary">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">RAKUDOKU</h2>
                  <p className="display-4 text-muted">
                    is benefitial in various ways
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 h-100">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            1
                          </div>
                          <h6 className="text-primary text-uppercase">For career & study</h6>
                          <p className="description mt-3">
                            For professionals and students, speed reading can improve information 
                            processing, reading skills, and productivity. The Rakudoku speed reading 
                            method also improves communication skills and creativity.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">skills</Badge>
                            <Badge color="primary" pill className="mr-1">creativity</Badge>
                            <Badge color="primary" pill className="mr-1">efficiency</Badge>
                          </div>
                          <br /><br /><br />
                          <Button
                            className="mt-4"
                            style={{"position": "absolute", "bottom": "30px"}}
                            color="primary"
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              this.scrollTo(this.state.os, "testimonial");
                            }}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 h-100">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            2
                          </div>
                          <h6 className="text-warning text-uppercase">For self improvement</h6>
                          <p className="description mt-3">
                            As an individual, speed reading helps by improving your scholastic ability, 
                            building confidence in every aspect of life, and reinforcing a life-long learning mentality.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">learning</Badge>
                            <Badge color="warning" pill className="mr-1">confidence</Badge>
                          </div>
                          <br /><br /><br />
                          <Button
                            className="mt-4"
                            style={{"position": "absolute", "bottom": "30px"}}
                            color="warning"
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              this.scrollTo(this.state.os, "testimonial");
                            }}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0 h-100">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            3
                          </div>
                          <h6 className="text-success text-uppercase">For health and life</h6>
                          <p className="description mt-3">
                            Experiments show that speed reading not only prevents brain aging but 
                            is also beneficial for mental health. An increased focus enables you 
                            to perform in various areas such as sports, art, communication, and more.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">health</Badge>
                            <Badge color="success" pill className="mr-1">concentration</Badge>
                            <Badge color="success" pill className="mr-1">anti aging</Badge>
                          </div>
                          <br /><br /><br />
                          <Button
                            className="mt-4"
                            style={{"position": "absolute", "bottom": "30px"}}
                            color="success"
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              this.scrollTo(this.state.os, "testimonial");
                            }}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg">
            <Container>
              <Row className="justify-content-between text-left">
                <Col lg="6">
                  <div className="rounded shadow-lg overflow-hidden transform-perspective-left">
                    <Card className="border-0">
                      <CardImg 
                        alt="..."
                        src={require("assets/img/theme/image-6.jpeg")}
                        top
                      />
                    </Card>
                  </div>
                </Col>
                <Col lg="6">
                  <p className="h3">
                    Practice and improve your Japanese through our Rakudoku lessons!
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg section-shaped pb-150">
            <div className="shape shape-style-1 shape-default bg-gradient-default">
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
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-4 text-white">How RAKUDOKU works</h2>
                  <p className="lead text-white">
                    The process of reading can be broken down into two processes: 
                    "seeing" with the eyes and "understanding" with the mind.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid justify-content-center">
                <Col lg="6">
                  <div className="mb-3">
                    <small className="text-uppercase font-weight-bold text-white">
                      The way we see
                    </small>
                  </div>
                  <div className="nav-wrapper">
                    <Nav
                      className="nav-fill flex-column flex-md-row"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.tabsLeft === 1}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.tabsLeft === 1
                          })}
                          onClick={(e) => this.toggleNavs(e, "tabsLeft", 1)}
                          href="#pablo"
                          role="tab"
                        >
                          I
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.tabsLeft === 2}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.tabsLeft === 2
                          })}
                          onClick={(e) => this.toggleNavs(e, "tabsLeft", 2)}
                          href="#pablo"
                          role="tab"
                        >
                          II
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                  <Card className={this.state.isMobile?"shadow":"shadow h-75"} >
                    <CardBody>
                      <TabContent activeTab={"tabsLeft" + this.state.tabsLeft}>
                        <TabPane tabId="tabsLeft1">
                          <h6 className="text-dark text-uppercase">
                            To "see" faster
                          </h6>
                          <p className="description">
                            Being able to process words faster will lead to faster reading. 
                            This is accomplished with visual training focused on speeding 
                            up eye movement.
                          </p>
                        </TabPane>
                        <TabPane tabId="tabsLeft2">
                          <h6 className="text-dark text-uppercase">
                            To "see" more
                          </h6>
                          <p className="description">
                            Increasing the amount of words that can be captured at once will 
                            lead to faster reading. We will train you to broaden your peripheral 
                            vision so that you can take in more information at once.
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <div className="mb-3">
                    <small className="text-uppercase font-weight-bold text-white">
                      The way we think
                    </small>
                  </div>
                  <div className="nav-wrapper">
                    <Nav
                      className="nav-fill flex-column flex-md-row"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.tabsRight === 1}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.tabsRight === 1
                          })}
                          onClick={(e) => this.toggleNavs(e, "tabsRight", 1)}
                          href="#pablo"
                          role="tab"
                        >
                          III
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.tabsRight === 2}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.tabsRight === 2
                          })}
                          onClick={(e) => this.toggleNavs(e, "tabsRight", 2)}
                          href="#pablo"
                          role="tab"
                        >
                          IV
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                  <Card className={this.state.isMobile?"shadow":"shadow h-75"} >
                    <CardBody>
                      <TabContent activeTab={"tabsRight" + this.state.tabsRight}>
                        <TabPane tabId="tabsRight1">
                          <h6 className="text-dark text-uppercase">
                            To "understand" faster
                          </h6>
                          <p className="description">
                            By utilizing your brain's potential, you will be able to process 
                            information at a higher rate. Through our training, you will be able 
                            to process the information perceived from your eyes faster.
                          </p>
                        </TabPane>
                        <TabPane tabId="tabsRight2">
                          <h6 className="text-dark text-uppercase">
                            To be able to 'predict' what's coming
                          </h6>
                          <p className="description">
                            When you read about a subject you're familiar with, you're able to 
                            understand the material quickly. Your brain recalls the relevant 
                            information that you already know. With repeated training, your 
                            ability to recall and predict information becomes sharper and faster. 
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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

          <section className="section section-lg" id="testimonial">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/image-5.jpeg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Feedbacks from students
                      </h4>
                      <p className="lead text-italic text-white">
                        RAKUDOKU students recommend our service for many reasons; 
                        the most common one is "the lesson is fun and interesting." 
                        Over 60% of students believe that speed reading training 
                        provided by RAKUDOKU is enjoyable and thus introduce it 
                        to their friends.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-hat-3" />
                    </div>
                    <h3>Why do our customers recommend RAKUDOKU</h3>
                    <div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-label">
                          <span className="heading text-dark">
                            Because lessons provided by RAKUDOKU are fun
                          </span>
                        </div>
                        <div className="progress-percentage">
                          <span>35%</span>
                        </div>
                      </div>
                      <Progress max="100" value="35" color="default" />
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-label">
                          <span className="heading text-dark">
                            Because I can continue learning without difficulty
                          </span>
                        </div>
                        <div className="progress-percentage">
                          <span>25%</span>
                        </div>
                      </div>
                      <Progress max="100" value="25" color="green" />
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-label">
                          <span className="heading text-dark">
                            Because I obtained skills beyond fast reading
                          </span>
                        </div>
                        <div className="progress-percentage">
                          <span>12%</span>
                        </div>
                      </div>
                      <Progress max="100" value="12" color="warning" />
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-label">
                          <span className="heading text-dark">
                            Because it encourages me to read more books
                          </span>
                        </div>
                        <div className="progress-percentage">
                          <span>10%</span>
                        </div>
                      </div>
                      <Progress max="100" value="10" color="primary" />
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-label">
                          <span className="heading text-dark">
                            Other reasons
                          </span>
                        </div>
                        <div className="progress-percentage">
                          <span>18%</span>
                        </div>
                      </div>
                      <Progress max="100" value="18" color="light" />
                    </div>
                  </div>
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

export default Home;
