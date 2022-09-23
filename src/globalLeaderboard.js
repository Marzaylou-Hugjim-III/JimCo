import React from "react";
import { Table, Card } from "react-bootstrap";
import "./globalLeader.css";



class GlobalLeaderboard extends React.Component {
  render() {
    return (

      <div className="flexi-vertical">
        <div className="flexi-horizontal">
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
        </div>
      </div>
    );
  }
}

export default GlobalLeaderboard;
