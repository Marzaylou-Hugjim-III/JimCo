import React from 'react';
import {Card, Table} from 'react-bootstrap';



class Gameswon extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} border="primary">
        <Card.Body>
          <Card.Title>History of Games won?</Card.Title>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Game 1</td>
                <td>Status of game? how many coins user won by? Maybe?</td>
              </tr>
              <tr>
                <td>Game 2</td>
                <td>Status of game? how many coins user won by? Maybe?</td>
              </tr>
              <tr>
                <td>Game 3</td>
                <td>Status of game? how many coins user won by? Maybe?</td>
              </tr>
              <tr>
                <td>Game 4</td>
                <td>Status of game? how many coins user won by? Maybe?</td>
              </tr>
              <tr>
                <td>Game 5</td>
                <td>Status of game? how many coins user won by? Maybe?</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}
export default Gameswon;