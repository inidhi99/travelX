import Jumbotron from "react-bootstrap";

function Header() {
  return (
    <>
      <Jumbotron className="header" styler={{ backgroundcolor: "lightblue" }}>
        <h1 className="headerName" style={{ align: "center", color: "white" }}>
          TravelX
        </h1>
        {/* <p>
          <Button bsStyle="primary">Learn more</Button>
        </p> */}
      </Jumbotron>
      ;
    </>
  );
}

export default Header;
