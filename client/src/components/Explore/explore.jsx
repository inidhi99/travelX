import { 
  InputGroup,
  Button, 
  Card 
} from "react-bootstrap";

function Explore() {
  return (
    <>
    {/* // explore location */}
    <Button variant="outline-info">Explore Popular Locations</Button>{' '}
    {/* // search by code  */}
    <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Default
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
    </InputGroup>
      {/* // cards */}
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> Location</Card.Title>
        <Card.Text>
        Location information
        </Card.Text>
        <Button variant="primary">Go to the location</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default Explore;
