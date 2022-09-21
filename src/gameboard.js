import React from "react";
import { Container, Card} from "react-bootstrap";
import { Button } from "react-bootstrap";


class Gameboard extends React.Component {
  render() {
    return <Container>
      {/* <h1>gameboard Test</h1> */}
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>List of Players Ready</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>JimCo Currency</Card.Title>
        <Card.Text>
          Section about JimCo Currency
        <Button variant="primary">Buy JimCo Currency</Button>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Chat??? Maybe???</Card.Title>
        <Card.Text>
          Chat Box
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>;
  }
}

export default Gameboard;
