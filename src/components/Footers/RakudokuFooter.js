import React from "react";

import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap"

class RakudokuFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row className="row-grid, align-items-center mb-5">
              <Col lg="6">
                <h3 className="text-default font-weight-light mb-2">
                  Thank you for visiting our site!
                </h3>
                <h6 className="mb-0 font-weight-light">
                  Please feel free to contact us if you have any questions or suggestions.
                </h6>
              </Col>
              <Col lg="6">
                <h3 className="font-weight-light mb-2">
                  Contact Info
                </h3>
                <h6 className="mb-0 font-weight-light">Email: mire@rakudoku-usa.com</h6>
                <h6 className="mb-0 font-weight-light">Phone: (650) 678-3338</h6>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="12">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a className="text-default">Rakudoku USA</a>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    )
  }
}

export default RakudokuFooter;