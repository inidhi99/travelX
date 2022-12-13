import { 
  Button,
  Col, 
  Form, 
  FormGroup, 
  FormControl } from "react-bootstrap";
  import './MainComp.css'

function Main() {
  return (
    <div id="create-profile-form">
      <h2> Create a profile!</h2>
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass='' sm={2} id="formName">
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" id="input"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass='' sm={2} id="formName">
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" id="input"/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            {/* <Checkbox>Remember me</Checkbox> */}
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" id="btn">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
      
    </div>
  );
}

export default Main;
