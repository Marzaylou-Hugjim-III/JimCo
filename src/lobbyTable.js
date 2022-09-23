import React from "react";
import { Table, Card } from "react-bootstrap";

class LobbyTable extends React.Component {
  render() {
    return (

      <Card style={{ width: "18rem" }} border="primary">
        <Card.Body>
          <Card.Title>lobby queue</Card.Title>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Status</td>
              </tr>
              <tr>
                <td>Player 1</td>
                <td>Ready</td>
              </tr>
              <tr>
                <td>Player 2</td>
                <td>Ready</td>
              </tr>
              <tr>
                <td>Player 3</td>
                <td>Ready</td>
              </tr>
              <tr>
                <td>Player 4</td>
                <td>Ready</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

    );
  }
}

export default LobbyTable;
