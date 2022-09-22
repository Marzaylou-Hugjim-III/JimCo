import React from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Container,
  Card,
} from "react-bootstrap";

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <h1>dashboard Test</h1>
        <Card style={{ width: "18rem" }} border="primary">
          <Card.Body>
            <Card.Title>Lobby</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} border="primary">
          <Card.Body>
            <Card.Title>Button Selectors</Card.Title>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-1" value={1}>
                Build yourself
              </ToggleButton>
              <ToggleButton id="tbg-radio-2" value={2}>
                Ruin your friends
              </ToggleButton>
            </ToggleButtonGroup>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} border="primary">
          <Card.Body>
            <Card.Title>Fastest Times</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} border="primary">
          <Card.Body>
            <Card.Title>Chat Room</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Dashboard;
