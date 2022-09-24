import React from "react";
import { ToggleButtonGroup, ToggleButton, Card, Button, Container } from "react-bootstrap";
import "./readyUp.css";

class ReadyUp extends React.Component {
  render() {
    return (
      // <Container className="ready-up">
      <div className="center-flex">
        <Card style={{ width: "18rem" }} border="primary" className="ready">
          <Card.Body>
            <Card.Title>ready up</Card.Title>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-1" value={1}>
                Build yourself
              </ToggleButton>
              <ToggleButton id="tbg-radio-2" value={2}>
                Ruin your friends
              </ToggleButton>
            </ToggleButtonGroup>

            <Button variant="success">start game</Button>
          </Card.Body>
        </Card>
      </div >
      // </Container>
    );
  }
}

export default ReadyUp;
