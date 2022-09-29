import React from "react";
import { Accordion, Card, Container } from "react-bootstrap";

class Aboutus extends React.Component {
  render() {
    return (
      <Container>

        <h1>Meet the team that brought you JimCo!</h1>

        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Martha</Accordion.Header>
            <Accordion.Body>
              <Card bg="light" border="light" style={{ width: "30rem" }}>
                <Card.Img variant="top" src="https://placekitten.com/640/360" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Zayah</Accordion.Header>
            <Accordion.Body>
              <Card bg="light" border="light" style={{ width: "30rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.fillmurray.com/640/360"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Luis</Accordion.Header>
            <Accordion.Body>
              <Card bg="light" border="light" style={{ width: "30rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.stevensegallery.com/640/360"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Hugo</Accordion.Header>
            <Accordion.Body>
              <Card bg="light" border="light" style={{ width: "30rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.placecage.com/640/360"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Jim</Accordion.Header>
            <Accordion.Body>
              <Card bg="light" border="light" style={{ width: "30rem" }}>
                <Card.Img variant="top" src="../.image/Tahoe.jpg" />
                <Card.Body>
                  <Card.Text>
                    I like to code. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    );
  }
}

export default Aboutus;
