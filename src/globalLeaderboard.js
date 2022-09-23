import React from "react";
import { Table, Card } from "react-bootstrap";

class GlobalLeaderboard extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} border="primary">
        <Card.Body>
          <Card.Title>global leaderboard</Card.Title>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Time</td>
              </tr>
              <tr>
                <td>Jim</td>
                <td>600 seconds</td>
              </tr>
              <tr>
                <td>Zayah</td>
                <td>760 seconds</td>
              </tr>
              <tr>
                <td>Martha</td>
                <td>1000 seconds</td>
              </tr>
              <tr>
                <td>Hugo</td>
                <td>1300 seconds</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}

export default GlobalLeaderboard;
