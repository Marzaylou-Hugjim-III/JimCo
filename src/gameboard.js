import React from "react";
import { Container, Card} from "react-bootstrap";
import { Button } from "react-bootstrap";


class Gameboard extends React.Component {
   // constructor(props){
  // super(props);
  // this.state = {
  // showModal: false,
// }
// }
  // handleOpenModal = () => {
  //this.setState({ showModal: true});
  // };


  render() {
    return <Container>
      <h1>gameboard Test</h1>
      <Card style={{ width: '18rem' }} >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body >
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


//FOR MODAL ON GAMEBOARD.js where nav bar located when user clicks on (Buy Buidling/Buy Events)



// handleCloseModal = () => {
//     this.setState({showModal: false});
//   };
// <Modal show={this.props.show} onHide={this.props.handleClose}>
        //   <Modal.Header closeButton>
        //     <Modal.Title> {this.props.selectedBeast.title}</Modal.Title>
        //   </Modal.Header>
        //   <Modal.Body> {this.props.selectedBeast.description}</Modal.Body>
        //   <Modal.Body> Number of Horns {this.props.selectedBeast.horns}</Modal.Body>
        //   <Modal.Footer>
        //     <Button variant="secondary" onClick={this.props.handleClose}>
        //       Close
        //     </Button>
        //   </Modal.Footer>
        // </Modal>
