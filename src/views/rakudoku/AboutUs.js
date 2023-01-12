import React from "react";

import {
  Card,
  CardImg,
  Container,
  Row,
  Col,
  UncontrolledCarousel
} from "reactstrap";

import RakudokuNavbar from "components/Navbars/RakudokuNavbar";
import RakudokuFooter from "components/Footers/RakudokuFooter";

import bg2 from "assets/img/theme/image-3.jpeg";

const items = [
  {
    src: require("assets/img/theme/rakudoku-usa-1.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/rakudoku-usa-2.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

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
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped">
              <div 
                className="shape shape-style-1 shape-default bg-image"
                style={{
                  "background-image": `url(${bg2})`, 
                  "background-position": "center right",
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
                        From "I can't do it" to 
                        <p className="display-3 text-default">"I can do it (if I try)"</p>
                        <span className="">You will realize how many possibilities you have!</span>
                      </h1>
                      <p className="lead text-black">
                        — Nanae Hirai, founder of RAKUDOKU
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
            <Container className="py-md">
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h3 className="display-4 text-dark">
                    Passion of the RAKUDOKU Founder
                  </h3>
                </Col>
              </Row>
              <Row className="row-grid aligh-items-center">
                <Col md="6">
                  <div className="pl-md-5">
                    <p>
                      Hello, my name is Nanae Hirai. 
                      It was 2005 when I first encountered speed-reading. 
                      I was impressed by the instructor's wonderful personality and felt great results. 
                      I realized that I might be able to contribute to a lot of people if they start liking books and save more time for themselves with their mastery of speed-reading. 
                      On the other hand, many people might end up quitting before mastering it because they might feel it was boring and hard to do. 
                      That is why I, who could easily get bored by the existing method of speed-reading, created the program of RAKUDOKU. 
                      Instead of facing the computer by yourself, we actually use a book and our instructors will support you directly. 
                      Instead of trying to increase your reading speed as dramatically as 10-20 times faster, we set our goal to 2-7 times faster than before while enjoying reading. 
                      Our training menu was built so that our students could enjoy their interactions among themselves by taking our lessons. 
                      While enjoying reading a book, you will be able to read at least twice as fast…that is the RAKUDOKU program. 
                      Students would change from the feeling of “Oh, I can't do it.” or “This is hard!” to the magical feelings of “I may be able to do it!” or “Wow! Why could I read that fast?” - is the Rakudoku program. 
                      The RAKUDOKU program may change your belief of “can't do” to “ maybe I can” and “Yes, I can!” 
                      Your reading speed will surely go up. But I would like you to feel your true possibilities. This is why I created the RAKUDOKU program. 
                      Please do not give up on your possibilities, and give it a try!
                    </p>
                  </div>
                </Col>
                <Col md="6">
                  <Card className="border-0">
                    <CardImg 
                      alt="..."
                      src={require("assets/img/theme/nanae.jpeg")}
                      top
                    />
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg section-shaped">
            <div className="shape shape-style-1 shape-default bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container>
              <Row className="justify-content-center text-center">
                <Col lg="8">
                  <h2 className="display-3 font-weight-light text-white">
                    Currently, RAKUDOKU has <a className="font-weight-bold">83</a> schools in Japan. 
                    And we are opening our first school in <a className="font-weight-bold">California, USA</a>
                  </h2>
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

          <section className="section section-lg">
            <Container>
              <Row className="justify-content-between text-left">
                <Col lg="6">
                  <div className="rounded shadow-lg overflow-hidden transform-perspective-left">
                    <UncontrolledCarousel items={items} />
                  </div>
                </Col>
                <Col lg="6">
                  <h2 className="display-4">
                    RAKUDOKU Silicon Valley School
                  </h2>
                  <p className="lead">
                    We are excited to launch our first school in Silicon Valley - the home to Apple, Facebook, and Google headquarters. 
                    We aim to establish our program and further promote our mission to the entire world.
                  </p>
                  <p className="lead">
                    Let's enjoy RAKUDOKU lessons and improve ourselves together!
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg">
            <Container>
              <Row>
                <Col lg="6">
                  <h3 className="display-4">
                    Testimonial
                  </h3>
                  <p className="lead">
                    At first I was skeptical, but Rakudoku has truly surprised me by bringing out more of my potential. 
                    The teachers are some of the nicest, most intuitive people out there. Not only have I learned to 
                    speed read, but I've learned how to make the most out of my intuition in life. Don't skip out on Rakudoku!
                  </p>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="6" md="6">
                  <br />
                  <div className="px-4">
                    <img 
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/testimonial-1.jpeg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Caprianna</span>
                        <small className="h6 text-muted">23, San Francisco</small>
                      </h5>
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

export default AboutUs;