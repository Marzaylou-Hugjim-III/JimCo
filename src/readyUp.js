import React from "react";
import { ToggleButtonGroup, ToggleButton, Card, Button } from "react-bootstrap";

class ReadyUp extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} border="primary">
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
    );
  }
}

export default ReadyUp;
