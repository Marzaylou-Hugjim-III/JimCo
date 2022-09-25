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
              {!!this.props.lobby && this.props.lobby.map(id => {
                return (
                  <tr key={id} >
                    <td>{id}</td>
                    <td>Ready</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

    );
  }
}

export default LobbyTable;
