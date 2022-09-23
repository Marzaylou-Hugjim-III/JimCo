import React from "react";
import { Container, ListGroup } from "react-bootstrap";

class Help extends React.Component {
  render() {
    return (
      <Container>
        <h1>FAQ</h1>

        <ListGroup numbered>
          <ListGroup.Item
            as="li"
            variant="light"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            variant="light"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            variant="light"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            variant="light"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    );
  }
}

export default Help;
